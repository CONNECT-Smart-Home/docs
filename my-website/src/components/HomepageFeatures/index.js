import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Integrations from '../../../static/img/Integrations_1.png';
import Configurator from '../../../static/img/Configurator_1.png';
import Blocks from '../../../static/img/Blocks_1.png';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Compact & technological</Translate>,
    Svg: Blocks,
    description: (
      <>
        <Translate>Full of technologies in each mm².
        High density of possibilities in compact dimensions.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Unlimited integrations</Translate>,
    Svg: Integrations,
    description: (
      <>
        <Translate>Wide standards, interfaces and APIs supporting - unlimited integration abilities.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Free cross-platform software</Translate>,
    Svg: Configurator,
    description: (
      <>
        <Translate>Configurator is the only one soft you need for your CONNECT Smart home configuring.
        Windows/macOS/Linux</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
