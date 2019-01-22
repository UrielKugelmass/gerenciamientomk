import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Jumbotron from './shared-components/Jumbotron';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Servicios extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <Jumbotron title="Servicios" description="A continuación se presentan 4 opciones de servicios profesionales que nuestra empresa puede ofrecer para cualquiera de los emprendimientos edilicios en Uruguay:"></Jumbotron>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Estudios de prefactibilidad de emprendimientos edilicios:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Esta área incluye el asesoramiento desde el punto de vista técnico y económico de las posibilidades de implantación de un negocio de construcción.<br></br><br></br>
Los servicios ofrecidos incluyen: <br></br><br></br>
&#9679; Estudio del terreno, análisis de posibilidades normativas respecto de alturas, m&sup2; construibles, factores de ocupación del suelo, etc. <br></br>
&#9679; Estudio del programa planteado por el propietario y esquema de partido arquitectónico para determinar  m&sup2; por uso para el terreno en cuestión. <br></br>
&#9679; Armado de planillas de áreas y estimado de costo de la construcción, incluyendo honorarios de las partes involucradas en el proyecto. <br></br>
&#9679; Asesoramiento de gestiones previas, técnicas constructivas y plazos de obra. <br></br>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Nacionalización de proyecto arquitectónico:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Los servicios ofrecidos incluyen: <br></br><br></br>
            &#9679; Revisión total del proyecto recibido, actualizando los planos con terminología, materiales, normativa y nomenclatura habitual en Uruguay, emitiendo planos, planillas y memorias aptos para licitación. <br></br>
            &#9679; Contratación de asesores locales, en Instalación Eléctrica, Sanitaria, Aire Acondicionado e Incendio. Se seguirá el proyecto de los asesores locales para cerrar proyectos ejecutivos compatibles con zonas de implantación y requerimientos de proyecto recibido.<br></br>
            &#9679; Estudio de propuestas desde el punto de vista económico y disponibilidad en plaza para optimizar el proyecto desde el punto de vista económico.<br></br>
            &#9679; Armado de pliegos y rubrados para licitación.<br></br>
            &#9679; Gestiones ante organismos públicos para energía eléctrica, instalaciones mecánicas, agua, etc.<br></br>
            &#9679; Firma técnica de técnico registrado en los organismos para gestiones.<br></br>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Dirección de obra:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Los servicios ofrecidos incluyen: <br></br><br></br>
            &#9679; Controlar efectivamente que se cumple con los recaudos, 
   planos, detalles, pliegos, memoria y reglas del arte del buen construir.<br></br>
            &#9679; Seguimiento de cronograma de obra incorporado al contrato.<br></br>
            &#9679; Control de avances físicos de obra para certificación mensual.<br></br>
            &#9679; Coordinación de trabajos con propietarios.<br></br>
            &#9679; Control de personal en obra, planillas de BPS.<br></br>
            &#9679; Presencia medio horario de un Arquitecto en obra.<br></br>
            &#9679;  Control de seguridad en obra, seguimiento de solicitudes 
                 del prevencionista de obra.<br></br> 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Servicios profesionales de owner's rep:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Permiten controlar todos los procesos del emprendimiento, desde el diseño hasta la entrega del edificio, asegurando en todo momento que los intereses del propietario estén en el centro de todas las decisiones que se tomen. <br></br>
De esta manera se evita mayores costos en el mediano plazo por pobres decisiones, que disminuyen notoriamente la rentabilidad del emprendimiento. <br></br>
El ingreso del Owner´s Representative al proyecto inmobiliario debe realizarse en las primeras etapas del mismo a efectos de poder potenciar su trabajo por medio de la planificación del emprendimiento desde el inicio, herramienta imprescindible para el gerenciamiento del proyecto.<br></br> 
Los servicios ofrecidos incluyen dos fases:<br></br><br></br>
<strong>A. Fase previa al inicio de obra:</strong> <br></br>
1. Análisis de recaudos para llamado a precios, identificando posibles conflictos en los mismos y evitando futuros inconvenientes y litigios con el contratista. <br></br>
2. Precalificación de oferentes y subcontratistas, interesándolos en el llamado. <br></br>
3. Aprobaciones y seguimiento de pago de honorarios de asesores contratados. <br></br>
4. Asistencia técnica a los oferentes durante el proceso de preparación de ofertas <br></br>
5. Análisis y comparación de ofertas. <br></br>
6. Asistencia al propietario en la negociación y selección del contratista general y eventuales subcontratos, participando en la redacción de los contratos respectivos. <br></br> <br></br>
<strong>B. Etapa de obra</strong> <br></br>
1. Monitorear el avance de obra, controlando se cumpla estrictamente con el cronograma previsto, entregado por el contratista principal y que forma parte del contrato de obra.<br></br>
2. Controlar la dirección de obra, para que la calidad de ejecución de los trabajos  cumpla con los requerimientos de la marca.<br></br>
3. Representar al propietario en las reuniones periódicas de coordinación.<br></br>
4. Controlar la certificación mensual de obra presentada por el contratista, verificando avances, fórmulas de ajuste paramétrico de precios, desacopios, retenciones de garantía.<br></br>
5. Aprobación de posibles trabajos complementarios que surjan, estudiando precios y alcances para su aprobación.<br></br>
6. Gestiones de inscripciones de obra ente BPS (banco de previsión social), MTSS (ministerio de trabajo y seguridad social). Relacionamiento de las empresas involucradas con estas entidades para control de F2 de vinculación.<br></br>
7. Aprobación de pagos de BPS (Leyes sociales del personal), emisión de etiquetas de código de barras web para presentación, emisión de boletos de pago. Planillas de control de gasto de Mano de Obra Imponible durante el proceso. <br></br>
8. Contratación de subcontratos no incluidos en contrato de empresa principal, pedida de precios, comparativa, adjudicación, seguimiento de pagos. <br></br>
9. Elaboración de informes periódicos referidos a la marcha de los trabajos.<br></br>
10. Inspección de los trabajos, detectando y resolviendo conflictos<br></br>





            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Servicios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Servicios);