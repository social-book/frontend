export class DomBuilderForHomeComponent {

  static liList: ListItem[] = [];

  static buildRawListItemsAndConnect(lc, data) {

    console.log('HHELLOOOOOOOO STATIC');

    for (let i = 0; i < data.length; i++) {
      const de = {};
      //// divbuild
      const childList = document.createElement('li');
      childList.className = 'inheritsize';
      childList.setAttribute('_ngcontent-c0', '');

      const childDivRoot = document.createElement('div');
      childDivRoot.className = 'floating inheritsize';
      childDivRoot.setAttribute('_ngcontent-c0', '');

      const childNameSpace = document.createElement('div');
      childNameSpace.className = 'namedata';
      childNameSpace.setAttribute('_ngcontent-c0', '');

      const childImgSpace = document.createElement('div');
      childImgSpace.className = 'floating container';
      childImgSpace.setAttribute('_ngcontent-c0', '');


      const nameImg = document.createElement('img');
      nameImg.className = 'size128';
      nameImg.style.height = '128px';
      nameImg.style.width = '128px';
      nameImg.setAttribute('_ngcontent-c0', '');

      const nameAndSurname = document.createElement('p');
      nameAndSurname.className = 'floating container';
      nameAndSurname.setAttribute('_ngcontent-c0', '');


      console.log('GOT TO APPENDING ZONE');

      lc.appendChild(childList);
      childList.appendChild(childDivRoot);
      childDivRoot.appendChild(childNameSpace);
      childDivRoot.appendChild(childImgSpace);
      childNameSpace.appendChild(nameImg);
      childNameSpace.appendChild(nameAndSurname);

      for (let j = 0; j < 4; j++) {
        const divImg = document.createElement('div');
        divImg.className = 'box';
        divImg.setAttribute('_ngcontent-c0', '');

        const imgX = document.createElement('img');
        imgX.id = 'img' + j;
        imgX.setAttribute('_ngcontent-c0', '');

        childImgSpace.appendChild(divImg);
        divImg.appendChild(imgX);
        divImg.setAttribute('_ngcontent-c0', '');

        de['divImg' + j] = nameImg;
        de['img' + j] = imgX;
      }

      de['li'] = childList;
      de['divRoot'] = childDivRoot;
      de['divnamespace'] = childNameSpace;
      de['childimgspace'] = childImgSpace;
      de['nameimg'] = nameImg;
      de['nameandsurname'] = nameAndSurname;

      this.liList.push(new ListItem(de, i));


    }
  }


  static fillAlbumUserData(index, data) {

    // let element = new HTMLElement();

    this.liList[index].domElements['nameandsurname'].innerHTML = data[index].user.name + ' ' + data[index].user.surname;
    this.liList[index].domElements['nameimg'].src = data[index].imgref;
    // this.liList[index].domElements['nameandusername'].innerHTML = 'mock';
    // this.liList[index].domElements['nameandusername'].innerHTML = 'mock';
    // this.liList[index].domElements['nameandusername'].innerHTML = 'mock';


  }

  static fillAlbumData(index, img) {

    // let element = new HTMLElement();
    for (let i = 0; i < img[index].length; i++) {
      this.liList[index].domElements['img' + i].src = img[index][i].imgref;
    }

  }


}

export class ListItem {
  seq_nr: number;
  private _domElements;
  // listElement;
  // divlistRoot;

  constructor(de, seq_nr) {
    this._domElements = de;
    // this.listElement = listElement;
    // this.divlistRoot = div;
    this.seq_nr = seq_nr;
  }


  get domElements() {
    return this._domElements;
  }
}
