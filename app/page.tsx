import Footer from "./ui/footer";

export default function Page() {
  const heroText = `Coming May 2024, Pictoplasma celebrates its 20th Berlin Conference and Festival anniversary edition with a special XXL line-up of awe inducing back-to-back conference lectures, freshly curated animation screenings, exhibitions, immersive media installations, networking, art markets, all-night parties, and the very best in contemporary character design! `;
  return (
    <div className={"w-full"}>
      <div className={"p-2 text-4xl uppercase"}>Pictoplasma</div>
      <div className={"m-2 h-48 bg-gray-300"}></div>
      <div className={"p-2"}>{heroText}</div>
      <div className={"p-2"}>Tickets now available!</div>
      <div className={"flex justify-end p-2"}>
        <button className={"border border-black p-2 uppercase"}>
          > Picto Conference
        </button>
      </div>
      <div className={"m-2 h-48 bg-gray-300"}></div>
      <Footer />
    </div>
  );
}
