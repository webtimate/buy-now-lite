export const TEXT_INPUT = "TEXT_INPUT";
export const FILE_UPLOAD = "FILE_UPLOAD";
export const CHECKBOX = "CHECKBOX";
export const DROPDOWN = "DROPDOWN";
export const DROPDOWN_WITH_BTN = "DROPDOWN_WITH_BTN";

// screen constants
export const TABLE_SCREEN = "TABLE_SCREEN";
export const RETAIL_SUMMARY_SCREEN = "RETAIL_SUMMARY_SCREEN";
export const PRODUCT_SUMMARY_SCREEN = "PRODUCT_SUMMARY_SCREEN";

export const retailSummaryData = [
  {
    id: 1,
    title: "Retailer Name",
    link: "https://www.oral-b.co.in/en-in",
    type: TEXT_INPUT,
  },
  {
    id: 2,
    title: "Retailer Logo",
    link: "https://www.oral-b.co.in/en-in",
    type: FILE_UPLOAD,
  },
  {
    id: 3,
    title: "Retailer Home Url",
    link: "Update successfully and changes will reflect after next run",
    type: TEXT_INPUT,
  },
  {
    id: 4,
    title: "Retailer Url",
    link: "Update successfully and changes will reflect after next run",
    type: TEXT_INPUT,
  },
  {
    id: 5,
    title: "Default Retailer",
    link: "Update successfully and changes will reflect after next run",
    type: CHECKBOX,
  },
];
export const productSummaryData = [
  {
    id: 1,
    title: "Product Name",
    link: "Pampers Baby Dry",
    type: DROPDOWN_WITH_BTN,
  },
  {
    id: 2,
    title: "Sku Name",
    link: "Pampers Baby Dry Diapers Newborn to Small - 46",
    type: DROPDOWN,
  },
  {
    id: 3,
    title: "GTIN",
    link: "4902430725379",
    type: TEXT_INPUT,
  },
  {
    id: 4,
    title: "Retailer Name",
    link: "Flipkart",
    type: DROPDOWN_WITH_BTN,
  },
  {
    id: 5,
    title: "Buy Now Url",
    link: "https://www.flipkart.com/abc",
    type: TEXT_INPUT,
  },
  {
    id: 6,
    title: "Secondary Url",
    link: "https://www.flipkart.com/abc",
    type: TEXT_INPUT,
  },
];
