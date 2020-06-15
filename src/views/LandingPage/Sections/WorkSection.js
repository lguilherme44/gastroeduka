import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Sobre meu e-book</h2>
          <h4 className={classes.description}>
            Meu e-book foi pensado para os que querem adentrar na profissão de
            cozinheiro. 👨🏻‍🍳 Um manual básico para alertar como funciona o dia a
            dia de uma cozinha profissional, situações que temos que lidar e o
            essencial que precisamos saber para começar. 🔪Deixando claro que
            esse e-book não é um curso, é apenas uma visão e uma coleta de
            informações para quem deseja ingressar na carreira e ainda não tem
            conhecimento das adversidades que viram. Espero ter ajudado, bom
            aproveito. 📚🍴
          </h4>

          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Name'
                  id='name'
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Email'
                  id='email'
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Your Message'
                id='message'
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color='primary'>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
