import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

let pth = '';

function prntPge() {
    window.print();
}

export default function PrintPage({path}) {
    pth = path;
  return (
    <div>
    <button class="button button--secondary" onClick = {prntPge}> 📃 <Translate>Print / Download PDF Datasheet</Translate></button>
    </div>
  );
}