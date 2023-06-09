type Props = {
  active: number;
};

const Steps = ({ active }: Props) => {
  const steps = [1, 2, 3];
  return (
    <div className="flex text-white">
      {steps.map((step) => {
        const bgColor =
          active === step
            ? "bg-emerald-500"
            : step < active
            ? "bg-indigo-600"
            : "bg-indigo-200";
        return (
          <>
            <div
              key={step}
              className={`flex items-center justify-center rounded-full font-semibold text-sm h-10 w-10 ${bgColor}`}
            >
              {step}
            </div>
            {step < steps.length && (<div className="text-gray-300 text-base mx-1 pt-2">•••</div>)}
          </>
        );
      })}
    </div>
  );
};

export default Steps;
