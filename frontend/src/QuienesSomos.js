import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Columns from 'react-columns'
import Jumbotron from './shared-components/Jumbotron';
import "./animate.css"
import "./quienesSomos.css"
// var Columns = require('react-columns');



const styles = theme => ({
    top: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
    },

    left: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      maxWidth: '99%',
      
    },

    topRight: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 10,
        maxWidth: '99%',
        marginLeft: '1%',
    },

    right: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      maxWidth: '99%',
      marginLeft: '1%',
    }

  });
  
const leftStyle = theme => ({
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      maxWidth: '99%'
})

  function QuienesSomos(props) {
    const { classes } = props;
    return (
      <div className="information">     
        <Jumbotron title="Quiénes Somos?" description="MK es una empresa que brinda servicios de gerenciamiento de obra. Una de las dudas que surge frente al gerenciador de una obra es cuáles son sus tareas y el alcance de esta denominación tan amplia. Para que se pueda entender el alcance detallamos algunos de los servicios que brindamos:"></Jumbotron>
        <Columns columns={2}>
            <Paper className={classes.left} elevation={1}>
            <Typography variant="h5" component="h3">
            Definición y presentación del proyecto:
            </Typography>
            <Typography component="p">
                El Gerente de proyecto, no es alguien que llegue a última hora a tomar decisiones. Su papel en el proyecto viene de más atrás, con la definición del mismo y la presentación de sus etapas y plazos a los clientes. Además, será una especie de intermediario entre éstos y el equipo de trabajo que ejecuta las tareas de proyecto tanto de arquitectura como de instalaciones.
            </Typography>
            </Paper>

            <Paper className={classes.topRight} elevation={1}>
            <Typography variant="h5" component="h3">
                Planificación:
            </Typography>
            <Typography component="p">
                De la presentación debe pasar a la planificación. En este segundo momento, el gerenciador tiene que ser mucho más preciso y definir elementos como fechas, plazos, responsables, cargos, recursos y costos. Al hacerlo, debe tener claro que ese plan será su guía durante todo el proceso de ejecución, siempre con el fin de lograr un beneficio para el propietario.

            </Typography>
            </Paper>

            <Paper className={classes.left} elevation={1}>
            <Typography variant="h5" component="h3">
            Establecer los objetivos:
            </Typography>
            <Typography component="p">
            No es posible llevar adelante proyectos de arquitectura sin definir los objetivos que nos guían en todo el proceso , es el  Gerenciador que  debe definirlos en función de la petición de un cliente o inversor. Sea como sea, debe ser el encargado de darle sentido al proyecto y lograr que este sentido sea una realidad.
            </Typography>
            </Paper>

            <Paper className={classes.right} elevation={1}>
            <Typography variant="h5" component="h3">
                Supervisión de tareas:
            </Typography>
            <Typography component="p">
            Es la principal función del Gerenciador, o al menos, la más reconocida de todas. Al delegar en terceros, un director de proyectos nunca pierde la visión estratégica; debe permanecer al tanto de cada tarea y medir la evolución de la misma y el desempeño de sus grupos de trabajo. En el grado de supervisión reside gran parte del éxito o el fracaso de los proyectos, sobre todo cuando se componen de muchas tareas.
            </Typography>
            </Paper>

            <Paper className={classes.left} elevation={1}>
            <Typography variant="h5" component="h3">
            Implementación de soluciones o cambios:
            </Typography>
            <Typography component="p">
            Por último, también es de su competencia la implementación de cambios y soluciones. Esto exige una capacidad de discernimiento constante, pues el Gerenciador debe decidir cuándo intervenir el proceso y cómo hacerlo. De igual forma, tendrá que decidir qué puntos del plan inicial se pueden modificar con el único fin de lograr para su cliente nuestros tres pilares , COSTOS, PLAZOS Y CALIDAD.
            </Typography>
            </Paper>

        </Columns>
      </div>
    );
  }
  
  QuienesSomos.propTypes = {
    classes: PropTypes.object.isRequired,
  };

// class QuienesSomos extends Component {
//     render(){
//         let pageSize = 12.0;
//         return(
//             <>
//               <div className='album py-5 bg-light listingPage'>
//                 <div className="container">
//                   <div className='row'>
//                     <p>Something in here</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//         )
//     }
// }



export default withStyles(styles)(QuienesSomos);

// export default QuienesSomos;


