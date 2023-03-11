import OurTeamCard from "./our-team-card";

const AboutOurTeam = () => {
  return (
    <section className="flex justify-center py-6 md:py-16">
      <div className="container flex items-center flex-col">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          Meet Our Team
        </h2>
        <p className="font-medium mt-3 mb-5 md:mb-10 text-gray-500 font-montserrat">
          Get to Know the Creative Minds Behind Our Success
        </p>
        <div className="grid md:grid-cols-3 gap-5 md:gap-10 ">
          <OurTeamCard
            name="Nikita Willy"
            occupation="CEO & FOUNDER"
            image="/team/team1.png"
          />
          <OurTeamCard
            name="Salsa Lele"
            occupation="CO-FOUNDER"
            image="/team/team2.png"
          />
          <OurTeamCard
            name="Alex Sulivan"
            occupation="CO-FOUNDER"
            image="/team/team3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutOurTeam;
