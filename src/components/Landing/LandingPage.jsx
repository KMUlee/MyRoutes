export default function LandingPage() {
  return (
    <div className="w-full h-full px-[48px] py-[32px]">
      <div>
        <h1 className="text-8xl font-bold">Don't be late</h1>
        <h1 className="text-8xl font-bold">with me</h1>
      </div>
      <section className="flex flex-col gap-[4px] mt-[64px] text-lg text-slate-500">
        <p>
          You can have the perfect route for your routine. Set intermediate
          points to your destination and record the time. Anything goes, such as
          crosswalks, bus stops, etc. By recording the arrival time, you can
          have the perfect route and know when to depart. You will never be late
          again.
        </p>
        <p>
          You can save up to two times per item, allowing you to account for
          variances. All information is stored in local storage, so if you want
          to keep your routine, don't clear the cache for this page. If the
          current time doesn't match, press the reload button to reset.
        </p>
      </section>
    </div>
  );
}
