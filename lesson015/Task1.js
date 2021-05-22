let control = {
  elements: [],
  firstPage() {
    for (let i = 0; i < this.pageSize; i++) {
      console.log(this.array[i]);
    }
    this.page = 1;
  },

  nextPages() {
    for (let i = 4 * this.page; i < this.pageSize + this.page * 4; i++) {
      control.elements.push(this.array[i]);
    }
    this.page++;
    return console.log(control.elements);
  },
  goToPage(value) {
    this.page = value;
    return this;
  },
};

let Pagination = {
  pageSize: 4,
  array: "abcdefghijklmnopqrstuvwxyz".split(""),
  page: 0,
  __proto__: control,
};

Pagination.nextPages();
console.log(Pagination.page);
