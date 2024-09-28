import { useEffect } from "react";
import TagCloud from "TagCloud";

export default function useAboutViewModel() {
  /**
   * Effect to initialize the tag cloud.
   */
  useEffect(() => {
    /**
     * Css class name for the tag cloud
     */
    const className = "tagcloud";

    /**
     * Container tag of css class
     */
    const container = `.${className}`;

    /**
     * List of technologies
     */
    const technologies = [
      "React",
      "JavaScript",
      "React Native",
      "NestJS",
      ".Net",
      "C#",
      "Laravel",
      "Git",
      "SQL",
      "NextJS",
      "Livewire",
      "Tailwind",
      "Bootstrap",
      "TypeScript",
    ];

    /**
     * Options for the tag cloud
     */
    const options = { radius: 250 };

    /**
     * Check if there is more than one instance of the tag cloud
     */
    const checkMoreThanOneInstance = () => {
      if (document.getElementsByClassName("tagcloud").length > 1) {
        document.getElementsByClassName("tagcloud")[1].remove();
      }
    };

    /**
     * Initialize the tag cloud
     */
    const init = () => {
      TagCloud(container, technologies, options);
    };

    checkMoreThanOneInstance();
    init();
  }, []);
}
