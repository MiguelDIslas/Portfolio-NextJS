import Particles from "react-tsparticles";

/**
 * This component is drawing the particles in the background.
 */
const Particle = () => (
  <Particles
    className="w-full h-full absolute -z-[1]"
    id="tsparticles"
    width="100%"
    height="100vh"
    options={{
      particles: {
        number: {
          value: 109,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
          },
          polygon: {
            nb_sides: 6,
          },
        },
        lineLinked: {
          enable: false,
          distance: 150,
          opacity: 0.4,
          width: 1,
          shadow: {
            enable: true,
            color: "#e74c3c",
            blur: 5,
          },
        },
        move: {
          enable: true,
          random: true,
          speed: 0.6,
          attract: {
            rotateX: 600,
            rotateY: 1200,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            speed: 40,
            size_min: 0.1,
          },
        },
        opacity: {
          value: 0.2,
          anim: {
            speed: 1,
            opacity_min: 0.1,
          },
        },
      },
    }}
  />
);

export default Particle;
