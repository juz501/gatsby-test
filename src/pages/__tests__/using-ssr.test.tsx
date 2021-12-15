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

const dogMock = {
  message: 'https://www.google.com',
  status: 'success'
}

const mockUseStaticQuery = useStaticQuery as jest.MockedFunction<typeof useStaticQuery>;

describe("Using SSR", () => {
  beforeEach(() => {
    mockUseStaticQuery.mockReturnValue(siteMetaMock);
    // TODO: mock fetch
  })
  it("should successfully set src to image tag", () => {
    const { getByTestId } = render(<UsingSSR serverData={ dogMock }/>);
    const node = getByTestId(`random-dog`);
    expect(node).toHaveAttribute("src", expect.stringMatching('https://www.google.com'));
  })
});
