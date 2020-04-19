import React from "react";
import { mount } from "enzyme";
import DetailNews from "./../components/DetailNews";
import Dialog from "@material-ui/core/Dialog";

describe("DetailNews", () => {
  let mountedWrapper;
  const defaultProps = {
    itemDetail: {
      uri: "nyt://article/0c53a478-7276-5fe7-abb7-e9272ed0f06b",
      url:
        "https://www.nytimes.com/2020/04/11/us/politics/coronavirus-trump-response.html",
      id: 100000007082117,
      asset_id: 100000007082117,
      source: "New York Times",
      published_date: "2020-04-11",
      updated: "2020-04-12 00:31:58",
      section: "U.S.",
      subsection: "Politics",
      nytdsection: "u.s.",
      adx_keywords:
        "Coronavirus (2019-nCoV);Presidential Election of 2020;United States Economy;United States International Relations;Shutdowns (Institutional);United States Politics and Government;Quarantines;Travel Warnings;Trump, Donald J;Azar, Alex M II;Birx, Deborah L;Fauci, Anthony S;Mnuchin, Steven T;Navarro, Peter;O'Brien, Robert C (1952- );Pence, Mike;Pottinger, Matthew;Redfield, Robert R;Centers for Disease Control and Prevention;National Security Council;Health and Human Services Department;National Center for Immunization and Respiratory Diseases;China",
      column: null,
      byline:
        "By Eric Lipton, David E. Sanger, Maggie Haberman, Michael D. Shear, Mark Mazzetti and Julian E. Barnes",
      type: "Article",
      title:
        "He Could Have Seen What Was Coming: Behind Trump’s Failure on the Virus",
      abstract:
        "An examination reveals the president was warned about the potential for a pandemic but that internal divisions, lack of planning and his faith in his own instincts led to a halting response.",
      des_facet: (8)[
        ("Coronavirus (2019-nCoV)",
        "Presidential Election of 2020",
        "United States Economy",
        "United States International Relations",
        "Shutdowns (Institutional)",
        "United States Politics and Government",
        "Quarantines",
        "Travel Warnings")
      ],
      org_facet: (4)[
        ("Centers for Disease Control and Prevention",
        "National Security Council",
        "Health and Human Services Department",
        "National Center for Immunization and Respiratory Diseases")
      ],
      per_facet: (10)[
        ("Trump, Donald J",
        "Azar, Alex M II",
        "Birx, Deborah L",
        "Fauci, Anthony S",
        "Mnuchin, Steven T",
        "Navarro, Peter",
        "O'Brien, Robert C (1952- )",
        "Pence, Mike",
        "Pottinger, Matthew",
        "Redfield, Robert R")
      ],
      geo_facet: ["China"],
      media: [],
      eta_id: 0
    },
    openDetails: true,
    setOpenDetails: jest.fn(),
    showBlock: true
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = mount(<DetailNews {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
  });

  it("should open detail dialog", () => {
    const component = wrapper();
    expect(component.find(Dialog).length).toEqual(1);
    component.unmount();
  });
});
