import { useState } from "react";

type FormState = {
  amount: number;
  interest: number;
  loanTerm: number;
};

const initialFormState = {
  amount: 0,
  interest: 0,
  loanTerm: 0,
};
const Mortgage = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleChange = (field: keyof FormState, val: string) =>
    setFormState((prev) => ({ ...prev, [field]: +val }));

  const calculateMonthlyPayment = (formData: FormState) => {
    const { interest, loanTerm, amount: loanAmt } = formData;
    const monthlyInterest = interest / 12 / 100;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      loanAmt *
      ((monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1));

    const totalPaymentAmount = monthlyPayment * numberOfPayments;
    const totalInterestAmount = totalPaymentAmount - loanAmt;

    setMonthlyPayment(Math.round(monthlyPayment * 100) / 100);
    setTotalPayment(Math.round(totalPaymentAmount * 100) / 100);
    setTotalInterest(Math.round(totalInterestAmount * 100) / 100);
  };

  return (
    <form
      className="mx-8 rounded-2xl bg-amber-300 p-8"
      onSubmit={(e) => e.preventDefault}
    >
      <div className="mb-4 flex items-center">
        <label htmlFor="amount" className="mr-4 flex-1/4 text-black">
          Amount
        </label>
        <input
          onChange={(e) => handleChange("amount", e.target.value)}
          type="number"
          id="amount"
          value={formState.amount || ""}
          className="flex-3/4 rounded-xl bg-amber-50 py-2 pl-4 text-black"
          data-testid="amount-input"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="interest" className="mr-4 flex-1/4 text-black">
          Interest rate (Annual)
        </label>
        <input
          onChange={(e) => handleChange("interest", e.target.value)}
          type="number"
          id="interest"
          value={formState.interest || ""}
          min={0}
          max={99}
          className="flex-3/4 rounded-xl bg-amber-50 py-2 pl-4 text-black"
          data-testid="interest-input"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="term" className="mr-4 flex-1/4 text-black">
          Loan term (Years)
        </label>
        <input
          onChange={(e) => handleChange("loanTerm", e.target.value)}
          type="number"
          id="term"
          value={formState.loanTerm || ""}
          className="flex-3/4 appearance-none rounded-xl bg-amber-50 py-2 pl-4 text-black"
          data-testid="loan-input"
        />
      </div>

      <div className="around mt-12 flex flex-col items-center rounded-2xl bg-amber-100 lg:flex-row">
        <div className="mx-4 flex flex-col justify-center rounded-2xl p-4 lg:w-4/12">
          <p className="mb-4 text-lg font-bold text-black">
            Monthly Mortgage payment
          </p>
          <p
            data-testid="monthly-payment"
            className="mt-auto text-lg text-black"
          >
            ${monthlyPayment}
          </p>
        </div>
        <div className="mx-4 flex flex-col justify-center p-4 lg:w-4/12">
          <p className="mb-4 text-lg font-bold text-black">
            Total payment amount
          </p>
          <p data-testid="total-payment" className="mt-auto text-lg text-black">
            ${totalPayment}
          </p>
        </div>
        <div className="mx-4 flex flex-col justify-center p-4 lg:w-4/12">
          <p className="mb-4 text-lg font-bold text-black">
            Total interest paid
          </p>
          <p
            data-testid="total-interest"
            className="mt-auto text-lg text-black"
          >
            ${totalInterest}
          </p>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => calculateMonthlyPayment(formState)}
        disabled={
          formState.amount === 0 ||
          formState.interest === 0 ||
          formState.loanTerm === 0
        }
        className="mt-4 cursor-pointer rounded-2xl bg-amber-100 p-4 px-8 text-black disabled:cursor-default disabled:text-gray-600"
      >
        Calculate
      </button>
    </form>
  );
};

export default Mortgage;
