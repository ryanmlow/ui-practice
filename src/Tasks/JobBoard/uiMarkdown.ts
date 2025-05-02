const jobBoardUiMarkdown = `
import { useState, useEffect } from "react";

type JobDetail = {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export const getDateTime = (time: number) => {
  const dateTime = new Date(time * 1000);

  const formattedDate = dateTime.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return formattedDate;
};

export const JOB_BOARD_TITLE = "Hacker News Jobs Board";
export const JOB_ID_URL =
  "https://hacker-news.firebaseio.com/v0/jobstories.json";

const JobBoard = () => {
  const [jobIds, setJobIds] = useState<number[]>();
  const [jobDetails, setJobDetails] = useState<JobDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateJobDetailPromise = (idArr: number[]) => {
    const initial: Promise<JobDetail>[] = [];
    for (let i = 0; i < idArr.length; i++) {
      initial.push(
        fetch(
          \`https://hacker-news.firebaseio.com/v0/item/\${idArr[i]}.json\`,
        ).then((res) => {
          if (!res.ok) {
            throw new Error(
              \`Failed to fetch job detail with status: \${res.status}\`,
            );
          }
          return res.json();
        }),
      );
    }
    return initial;
  };

  const handleLoadMore = async () => {
    const start = jobDetails.length;
    const end = start + 6;
    if (jobIds) {
      try {
        setLoading(true);
        const nextSix = jobIds.slice(start, end);
        const jobDetailURLs = generateJobDetailPromise(nextSix);
        const details = await Promise.all(jobDetailURLs);
        setJobDetails((prev) => [...prev, ...details]);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchJobStories = async () => {
      try {
        setLoading(true);
        const response = await fetch(JOB_ID_URL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setJobIds(json);
        const firstSix = json.slice(0, 6);
        const jobDetailURLs = generateJobDetailPromise(firstSix);
        const details = await Promise.all(jobDetailURLs);

        setJobDetails(details);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobStories();
  }, []);

  return (
    <div className="rounded-lg bg-gray-800 p-8">
      <h1 className="mb-8">{JOB_BOARD_TITLE}</h1>
      <div>
        {jobDetails &&
          jobDetails.map((job) => (
            <a
              key={job.id}
              href={job.url}
              target="_blank"
              className="cursor-pointer"
              data-testid="job"
            >
              <div className="mb-4 rounded-lg bg-orange-200 px-8 py-4 transition duration-200 hover:-translate-y-0.5">
                <h3 className="mt-2 mb-4 text-left text-2xl font-bold text-blue-950">
                  {job.title}
                </h3>
                <div className="flex gap-4 text-blue-900">
                  <p>By {job.by}</p>
                  <p>{getDateTime(job.time)}</p>
                </div>
              </div>
            </a>
          ))}
        {error && <p className="font-bold text-red-400 italic">{error}</p>}
        {loading && (
          <div
            className="my-4 flex justify-center"
            data-testid="loader-spinner"
          >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-400 border-t-transparent"></div>
          </div>
        )}
      </div>
      {jobIds && jobIds.length !== jobDetails.length && (
        <button
          className="cursor-pointer rounded-xl bg-gray-400 px-4 py-3 disabled:cursor-default disabled:text-gray-500"
          onClick={handleLoadMore}
          disabled={loading}
        >
          <p className="font-bold">Load more</p>
        </button>
      )}
      {jobIds && jobIds.length === jobDetails.length && (
        <p className="text-2xl font-bold text-orange-200">All results shown</p>
      )}
    </div>
  );
};
`;

export default jobBoardUiMarkdown;
