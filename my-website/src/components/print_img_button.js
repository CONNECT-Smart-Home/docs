import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

let pth = '';

function prntImg() {
    let newWindow = window.open(pth);
    newWindow.print();
}

export default function PrintImg({path}) {
    pth = path;
  return (
    <div>
    <button class="button button--secondary" onClick = {prntImg}> <Translate>Print this scheme</Translate> ⤴️</button>
    </div>
  );
}