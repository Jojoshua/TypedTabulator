let tableConfig: Tabulator.Options = {
  data: [
    { id: 1, name: "Oli Bob's \"", location: "United Kingdom", gender: "male", rating: 1, col: "red" },
    { id: 2, name: "Mary May", location: "Germany", gender: "female", rating: 2, col: "blue" },
    { id: 3, name: "Christine Lobowski", location: "France", gender: "female", rating: 0, col: "green" },
    { id: 4, name: "Brendon Philips", location: "USA", gender: "male", rating: 1, col: "orange" },
    { id: 5, name: "Margret Marmajuke", location: "Canada", gender: "female", rating: 5, col: "yellow" },
    { id: 6, name: "Frank Harbours", location: "Russia", gender: "male", rating: 4, col: "red" },
    { id: 7, name: "Jamie Newhart", location: "India", gender: "male", rating: 3, col: "green" },
    { id: 8, name: "Gemma Jane", location: "China", gender: "female", rating: 0, col: "red" },
    { id: 9, name: "Emily Sykes", location: "South Korea", gender: "female", rating: 1, col: "maroon" },
    { id: 10, name: "James Newman", location: "Japan", gender: "male", rating: 5, col: "" }
  ],
  height: "100%",
  layout: "fitColumns",
  columns: [
    { title: "Rating", field: "rating", editor: "textarea", editableTitle: true, sorter: "string", headerFilter: true, bottomCalc: "sum" },
    { title: "Name", field: "name", editor: "textarea", editableTitle: true, sorter: "string", headerFilter: true },
    { title: "Location", field: "location", editor: "input", editableTitle: true },
    {
      title: "Gender",
      field: "gender",
      editor: "tickCross",
      editorParams: {
        tristate: true,
        indeterminateValue: "n/a"
      }
    },
    { title: "Color", field: "col", editor: "select", editorParams: { values: ["red", "green", "blue", "orange", "light \" ' gray"] } },
    { title: "Color", field: "col", editor: "autocomplete", editorParams: { values: ["red", "green", "blue", "orange", "light \" ' gray"], freetext: true, showListOnEmpty: true } }
  ],
  resizableRows: true,
  movableColumns: true,
  clipboard: true,
  clipboardPasteAction: "replace",
  tableBuilt: function() {
    console.log("Built");
  }
};

let table = new Tabulator("#table", tableConfig);

console.log(table.getColumnLayout());
console.log(table.getColumnDefinitions());
console.log(table.getColumns());

let columns = table.getColumns() as Tabulator.ColumnComponent[];
columns.forEach(element => {
  element.getCells().forEach(cell => {
    console.log(cell.getData());
  });
});
