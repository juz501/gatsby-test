import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import UsingSSR from "../using-ssr";

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

const dogData = {
  message: 'https://dog.ceo/api/breeds/image/random',
  status: 'success'
}

describe("Using SSR", () => {
  beforeAll(() => {
    mockUseStaticQuery.mockReturnValue(siteMetaMock);
  })
  it("exists with a dog URL", () => {
    const { getByTestId } = render(<UsingSSR serverData={dogData} />);
    const node = getByTestId(`random-dog`);
    expect(node).toHaveAttribute("src", "https://dog.ceo/api/breeds/image/random");
  })
});
