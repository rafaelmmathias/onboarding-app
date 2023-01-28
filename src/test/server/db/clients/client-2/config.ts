import { Steps } from "@/entities/steps.entities";

export const config2: Steps = [
  {
    route: "onboarding",
    type: "info",
    data: {
      title: "Going electric starts with understanding your needs",
      description:
        "We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.",
      buttonText: "Create Your First Vehicle Set",
      elements: [
        {
          icon: "wheel",
          text: "Tell us about your organization",
        },
        {
          icon: "car",
          text: "Tell us about your vehicles",
        },
        {
          icon: "chart",
          text: "See how much you can save",
        },
      ],
    },
  },
  {
    route: "building-type",
    type: "form",
    data: {
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      field: {
        type: "select",
        fieldName: "building_type",
        label: "Building Type",
        tip: "Used to check incentive applicability and fuel prices",
        options: [
          {
            label: "Home (Garage)",
            value: "home",
          },
          {
            label: "Small Office",
            value: "small_office",
          },
          {
            label: "Large Office",
            value: "large_office",
          },
        ],
      },
    },
  },
  {
    route: "state",
    type: "form",
    data: {
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      field: {
        type: "input",
        fieldName: "state",
        label: "State",
        tip: "Used to check incentive applicability and fuel prices",
      },
    },
  },
];
