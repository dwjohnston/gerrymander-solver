import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'flex',
        height: 300,
    },
};

class ControlPanel extends Component {


    constructor() {
        super();
        this.state = {
            values: []
        };
    }
    handleChange(e, v, i) {
        console.log(e, i);

        let oldArray = Object.assign({}, this.state.values);
        oldArray[i] = v;
        this.setState({
            values: oldArray
        }
        );


        this.props.onChange(this.state.values);
    }


    componentWillMount() {
        this.setState({
            values: this.props.params.map(() => 50)
        });
    }

    render() {
        const { params, classes } = this.props;
        const { values } = this.state;
        return <div className={classes.root}>


            {params.map((param, i) =>
                <div className="slider-container" key={i}>
                    <Slider vertical onChange={(e, v) => this.handleChange(e, v, i)} value={values[i]} />
                    < Typography id={param.label}> {param.label}</Typography>
                </div>
            )}

        </div>;
    }
}


export default withStyles(styles)(ControlPanel);
