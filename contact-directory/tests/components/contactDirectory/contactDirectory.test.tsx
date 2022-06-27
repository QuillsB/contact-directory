/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactDirectory from "../../../src/components/contactDirectory/contactDirectory";

describe("ContactDirectory", () => {
  beforeEach(() => {
    render(<ContactDirectory />);
  });

  it("should display title of the contact directory", () => {
    expect(screen.getByText("My contacts")).toBeInTheDocument();
  });
});
