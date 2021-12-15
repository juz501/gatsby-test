import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import UsingSSR, { getServerData } from "../using-ssr";

const siteMetaMock = {
  site: {
    siteMetadata: {
      title: 'test jest title',
      author: 'test author',
      description: 'test description',
    }
  }
}

const mockUseStaticQuery = useStaticQuery as jest.MockedFunction<typeof useStaticQuery>;

describe("Using SSR", () => {
  beforeEach(() => {
    mockUseStaticQuery.mockReturnValue(siteMetaMock);
    // TODO: mock fetch
  })
  it("exists with a dog URL",  async () => {
    const data = await getServerData();
    const { getByTestId } = await render(<UsingSSR serverData={data.props}/>);
    const node = getByTestId(`random-dog`);
    expect(node).toHaveAttribute("src", expect.not.stringMatching(''));
  })
});
