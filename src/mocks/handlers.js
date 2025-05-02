import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://hacker-news.firebaseio.com/v0/jobstories.json", () => {
    return HttpResponse.json([123, 456, 789]);
  }),
];
