const onclickhandler = () => {
  console.log("page is .....open");
};

export const navdata = [
  {
    mainheading: "home",
    url: "/",
    isHome: true
  },
  {
    mainheading: "company profile",
    url: "/",
    subdata: [
      { subheading: "about us", url: "/" },
      { subheading: "our team", url: "/" },
      { subheading: "our clients", url: "/" },
      { subheading: "awards & recognition", url: "/" }
    ]
  },
  {
    mainheading: "services",
    url: "/",
    subdata: [
      { subheading: "performance marketing", url: "/" },
      { subheading: "dedicated marketing", url: "/" },
      { subheading: "social media management", url: "/" },
      { subheading: "PR agency", url: "/" }
    ]
  },
  {
    mainheading: "blog",
    url: "/"
  },
  {
    mainheading: "contact us",
    url: "/",
    subdata: [
      { subheading: "contact", url: "/" },
      { subheading: "career", url: "/" }
    ]
  },
  {
    mainheading: "enquiry now",
    onClick: onclickhandler,   
    type: "button"
  }
];
