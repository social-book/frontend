export class DomBuilderForHomeComponent {

  static liList: ListItem[] = [];

  static buildRawListItemsAndConnect(lc, data) {

    for (let i = 0; i < data.length; i++) {
      //// divbuild
      const child = document.createElement('li');
      child.className = 'inheritsize';
      this.liList.push(new ListItem(child, i));

      lc.appendChild(child);
    }
  }

}

export class ListItem {
  seq_nr: number;
  listElement;

  constructor(listElement, seq_nr){
    this.listElement = listElement;
    this.seq_nr = seq_nr;
  }
}
