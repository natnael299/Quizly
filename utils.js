export const choice_array = JSON.parse(localStorage.getItem("multiple")) || [
  {
    name: "Television",
    id: 14,
    level: "easy",
    format: "multiple"
  }
];

save_to_storage_multi();
export function save_to_storage_multi() {
  localStorage.setItem("multiple", JSON.stringify(choice_array));
};

export const boolean_array = JSON.parse(localStorage.getItem("boolean")) || [
  {
    name: "Television",
    id: 14,
    level: "easy",
    format: "boolean"
  }
];

save_to_storage_bool();
export function save_to_storage_bool() {
  localStorage.setItem("boolean", JSON.stringify(boolean_array));
};

export const resultArray = JSON.parse(localStorage.getItem("result")) || [
  {
    type: "multiple",
    correct: 12,
    incorrect: 8,
    percentage: 60
  }
];

save_result();
export function save_result() {
  localStorage.setItem("result", JSON.stringify(resultArray));
};
