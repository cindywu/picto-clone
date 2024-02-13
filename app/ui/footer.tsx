export default function Footer() {
  const newsletterDescriptionText = `Picto news are good news! Sign up for our semi-monthly newsletter - and we'll keep you up to date on all our upcoming fesitvals, conferences, exhibitions, publications, submission deadlines, call for entries - and all things character design and art!`;
  return (
    <div className={"flex w-full flex-col text-center"}>
      <div className={"flex flex-row justify-center"}>
        <div className={"w-96 pb-8"}>
          <div className={"text-2xl uppercase"}>Pictoplasma</div>
          <div className={"uppercase"}>
            Off- and online community for characters & creators
          </div>
        </div>
      </div>
      <div className={"flex flex-row justify-center pb-10"}>
        <div className={"w-96"}>
          <div className={"p-2"}>Sign up for picto news</div>
          <div className={"text-xs"}>{newsletterDescriptionText}</div>
          <div className={"p-2"}>
            <input
              className={"w-96 border border-black p-2 p-2 text-xs"}
              placeholder={"enter your email address"}
            />
          </div>
          <div className={"py-2 text-xs"}>
            <input className={"m-2"} type="checkbox" />
            <label>
              I allow Pictoplasma to send me newsletters -- and know I can
              un-subscribe at any time
            </label>
          </div>
          <button className={"border border-black px-2 py-1 uppercase"}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
