import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require('assets/img/bg-gastroeduka.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Escola de Gastronomia Daniel Bueno
              </h1>
              <h4>
                Cozinhar é maravilhoso e todo mundo sabe 🥰. Com esse ebook você
                tira informações que precisaria ficar coletando pra saber se vai
                ou não começar na gastronomia. Isso vai te fazer economizar
                dinheiro, e você não precisará começar{' '}
              </h4>
              <br />
              <Button
                color='danger'
                size='lg'
                href='https://www.hotmart.com/product/manual-do-cozinheiro-introducao-a-profissao-conhecimentos-basicos-e-historia/X33482906C'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fas fa-play' />
                Conheça o meu e-book.
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
