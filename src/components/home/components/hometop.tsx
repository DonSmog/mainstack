import morning from "/morning.png";
import sunrise from "/sunrise.png";
import night from "/night.png";

export const HomeTop = () => {
  const timeOfDay = new Date().getHours();
  let greeting = "";
  if (timeOfDay < 12) {
    greeting = "Good Morning";
  } else if (timeOfDay >= 12 && timeOfDay < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-1 items-center">
        <h1 className="text-primary font-bold text-[24px] leading-[32px]">
          {greeting}, Blessing
        </h1>
        <img
          className="w-9 h-9 object-contain"
          src={
            timeOfDay < 12
              ? morning
              : timeOfDay >= 12 && timeOfDay < 17
              ? sunrise
              : night
          }
          alt="time of day"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-secondary text-sm">
          Check out your dashboard summary.
        </p>
        <span className="text-tertiary text-sm cursor-pointer hover:font-bold">
          View analytics
        </span>
      </div>
    </div>
  );
};
