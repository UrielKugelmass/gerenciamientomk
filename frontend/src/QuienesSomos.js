// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Columns from 'react-columns'
// import Jumbotron from './shared-components/Jumbotron';
// import Bottom from './shared-components/Bottom';
// import "./animate.css";
// import "./quienesSomos.css";
// import posed from 'react-pose';



// const styles = theme => ({
//     top: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//         marginTop: theme.spacing.unit * 2,
//     },

//     left: {
//       ...theme.mixins.gutters(),
//       paddingTop: theme.spacing.unit * 2,
//       paddingBottom: theme.spacing.unit * 2,
//       marginTop: theme.spacing.unit * 2,
//       maxWidth: '99%',
      
//     },

//     topRight: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//         marginTop: theme.spacing.unit * 10,
//         maxWidth: '99%',
//         marginLeft: '1%',
//     },

//     right: {
//       ...theme.mixins.gutters(),
//       paddingTop: theme.spacing.unit * 2,
//       paddingBottom: theme.spacing.unit * 2,
//       marginTop: theme.spacing.unit * 2,
//       maxWidth: '99%',
//       marginLeft: '1%',
//     }

//   });
  
// const leftStyle = theme => ({
//       ...theme.mixins.gutters(),
//       paddingTop: theme.spacing.unit * 2,
//       paddingBottom: theme.spacing.unit * 2,
//       marginTop: theme.spacing.unit * 2,
//       maxWidth: '99%'
// })

//   function QuienesSomos(props) {
//     const Box = posed.div({
//       visible: { opacity: 1 },
//       hidden: { opacity: 0 }
//     });
//     const { classes } = props;
//     return (
//       // <Box className="box" pose={'visible'}/>
//       <div className="information">     
//         <Jumbotron title="¿Quiénes Somos?" description="MK es una empresa que brinda servicios de gerenciamiento de obra. Una de las dudas que surge frente al gerenciador de una obra es cuáles son sus tareas y el alcance de esta denominación tan amplia. Para que se pueda entender el alcance detallamos algunos de los servicios que brindamos:"></Jumbotron>
//         <Columns columns={2}>
//             <Paper className={classes.left} elevation={1}>
//             <Typography variant="h5" component="h3">
//             Definición y presentación del proyecto:
//             </Typography>
//             <Typography component="p">
//                 El Gerente de proyecto, no es alguien que llegue a última hora a tomar decisiones. Su papel en el proyecto viene de más atrás, con la definición del mismo y la presentación de sus etapas y plazos a los clientes. Además, será una especie de intermediario entre éstos y el equipo de trabajo que ejecuta las tareas de proyecto tanto de arquitectura como de instalaciones.
//             </Typography>
//             </Paper>

//             <Paper className={classes.topRight} elevation={1}>
//             <Typography variant="h5" component="h3">
//                 Planificación:
//             </Typography>
//             <Typography component="p">
//                 De la presentación debe pasar a la planificación. En este segundo momento, el gerenciador tiene que ser mucho más preciso y definir elementos como fechas, plazos, responsables, cargos, recursos y costos. Al hacerlo, debe tener claro que ese plan será su guía durante todo el proceso de ejecución, siempre con el fin de lograr un beneficio para el propietario.

//             </Typography>
//             </Paper>

//             <Paper className={classes.left} elevation={1}>
//             <Typography variant="h5" component="h3">
//             Establecer los objetivos:
//             </Typography>
//             <Typography component="p">
//             No es posible llevar adelante proyectos de arquitectura sin definir los objetivos que nos guían en todo el proceso , es el  Gerenciador que  debe definirlos en función de la petición de un cliente o inversor. Sea como sea, debe ser el encargado de darle sentido al proyecto y lograr que este sentido sea una realidad.
//             </Typography>
//             </Paper>

//             <Paper className={classes.right} elevation={1}>
//             <Typography variant="h5" component="h3">
//                 Supervisión de tareas:
//             </Typography>
//             <Typography component="p">
//             Es la principal función del Gerenciador, o al menos, la más reconocida de todas. Al delegar en terceros, un director de proyectos nunca pierde la visión estratégica; debe permanecer al tanto de cada tarea y medir la evolución de la misma y el desempeño de sus grupos de trabajo. En el grado de supervisión reside gran parte del éxito o el fracaso de los proyectos, sobre todo cuando se componen de muchas tareas.
//             </Typography>
//             </Paper>

//             <Paper className={classes.left} elevation={1}>
//             <Typography variant="h5" component="h3">
//             Implementación de soluciones o cambios:
//             </Typography>
//             <Typography component="p">
//             Por último, también es de su competencia la implementación de cambios y soluciones. Esto exige una capacidad de discernimiento constante, pues el Gerenciador debe decidir cuándo intervenir el proceso y cómo hacerlo. De igual forma, tendrá que decidir qué puntos del plan inicial se pueden modificar con el único fin de lograr para su cliente nuestros tres pilares , COSTOS, PLAZOS Y CALIDAD.
//             </Typography>
//             </Paper>

//         </Columns>
//         <Bottom description="Por consultas: "></Bottom>
//       </div>
//     );
//   }
  
//   QuienesSomos.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };



// export default withStyles(styles)(QuienesSomos);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Jumbotron from './shared-components/Jumbotron';
import Bottom from './shared-components/Bottom';

import './index.css';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class QuienesSomos extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;

    return (
      <div>
         <Jumbotron title="¿Quiénes Somos?" description="MK es una empresa que brinda servicios de gerenciamiento de obra. Una de las dudas que surge frente al gerenciador de una obra es cuáles son sus tareas y el alcance de esta denominación tan amplia. Para que se pueda entender el alcance detallamos algunos de los servicios que brindamos:"></Jumbotron>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Definición y presentación del proyecto:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails  className="servicios-text">
            <Typography>
            El Gerente de proyecto, no es alguien que llegue a última hora a tomar decisiones. <br></br>Su papel en el proyecto viene de más atrás, con la definición del mismo y la presentación de sus etapas y plazos a los clientes. <br></br>Además, será una especie de intermediario entre éstos y el equipo de trabajo que ejecuta las tareas de proyecto tanto de arquitectura como de instalaciones.
            

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Planificación:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="servicios-text">
            <Typography>
            De la presentación debe pasar a la planificación. <br></br>En este segundo momento, el gerenciador tiene que ser mucho más preciso y definir elementos como fechas, plazos, responsables, cargos, recursos y costos. <br></br>Al hacerlo, debe tener claro que ese plan será su guía durante todo el proceso de ejecución, siempre con el fin de lograr un beneficio para el propietario.           
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">
            Establecer los objetivos:
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails  className="servicios-text">
            <Typography>            
              No es posible llevar adelante proyectos de arquitectura sin definir los objetivos que nos guían en todo el proceso.<br></br>Es el Gerenciador quien debe definirlos en función de la petición de un cliente o inversor. <br></br>Sea como sea, debe ser el encargado de darle sentido al proyecto y lograr que este sentido sea una realidad.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Supervisión de tareas:
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails  className="servicios-text">
            <Typography>
            Es la principal función del Gerenciador, o al menos, la más reconocida de todas. <br></br>Al delegar en terceros, un director de proyectos nunca pierde la visión estratégica; debe permanecer al tanto de cada tarea y medir la evolución de la misma y el desempeño de sus grupos de trabajo. <br></br>En el grado de supervisión reside gran parte del éxito o el fracaso de los proyectos, sobre todo cuando se componen de muchas tareas.




            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Implementación de soluciones o cambios:
</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails  className="servicios-text">
            <Typography>
            Por último, también es de su competencia la implementación de cambios y soluciones. <br></br>Esto exige una capacidad de discernimiento constante, pues el Gerenciador debe decidir cuándo intervenir el proceso y cómo hacerlo. <br></br>De igual forma, tendrá que decidir qué puntos del plan inicial se pueden modificar con el único fin de lograr para su cliente nuestros tres pilares: <strong>costos, plazos y calidad</strong>.





            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Bottom description="Por consultas: "></Bottom>
      </div>
    );
  }
}

export default QuienesSomos;


