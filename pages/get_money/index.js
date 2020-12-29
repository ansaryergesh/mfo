import React from 'react';
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import FirstStep from '../../components/registrationForm/FormRegister';
import CodeConfirm from '../../components/registrationForm/CodeConfirm';
import SecondStep from '../../components/registrationForm/StepSecond';
import ThirdStep from '../../components/registrationForm/ThirdStep';
import {stepRegistration, emptyMessage,errorMessage} from '../../store/actions/ActionCreators'
import { connect } from 'react-redux';
import $ from 'jquery'
import Head from 'next/head'
import { actions } from 'react-redux-form'
const labels = [ 'Регистрация', 'Заполнения анкеты', 'Отправка анкеты',  ];
const handleSteps = step => {
    switch (step) {
        case 0:
            return (
                <FirstStep props
                />
            )
        case 1:
            return (
                <CodeConfirm
                />

            )
        case 2:
            return (
                <SecondStep
                />

            )
        case 3:
            return (
                <ThirdStep />
            )
        default:
            break
    }
}
const mapStateToProps = state => {
    return {
        stepregistration: state.stepregistration
    }
}
const mapDispatchToProps = (dispatch) => ({
    stepRegistration: step =>{dispatch(stepRegistration(step))},
    resetRegistration: () => { dispatch(actions.reset('registration'))},
    resetRegistration2:()=>{dispatch(actions.reset('registration2'))},
    resetRegistration3:()=>{dispatch(actions.reset('registration3'))},
    emptyMessage:() => { dispatch(emptyMessage())},
    errorMessage: message => {dispatch(errorMessage(message))}

})

const stepcheck = (val) => {
    if(val>0) {
        return val-1
    }
    return 0;
}
// const registrationStep = window.localStorage.getItem('step')


class FormStep extends React.Component {
    state = {
        registrationStep: 0,
        loading: true
    }
    componentDidMount() {
        $('input').on('focus',function(){

            var prev = $(this).offset().top;
            var inputHeight = prev-210
            // var inputHeight=prev.offset().top
            if(window.innerWidth<=768) {
                $("html, body").animate({ scrollTop: inputHeight}, 300);
                return false;
            }
         });

        if(localStorage.getItem('step')) {
            this.setState({
                registrationStep: localStorage.getItem('step')
            })
        }
        setTimeout(() => {
            this.setState ({
                loading: false
            })
        }, 500)
        function accepCirrilic(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            var verified = String.fromCharCode(charCode).match(/[a-zA-Z0-9_"*/]/);
            if (verified) {
                evt.preventDefault();
                $('.hint').addClass('hinterror');
            } else {
                $('.hint').removeClass('hinterror')
            }
        }

        $('.registerCyrril').on('keypress', event => {
            accepCirrilic(event)
        })

        $('.registerCyrril').keyup(function(event) {
            var textBox = event.target;
            var start = textBox.selectionStart;
            var end = textBox.selectionEnd;
            textBox.value = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
            textBox.setSelectionRange(start, end);
        });


        this.props.emptyMessage();
        this.props.resetRegistration();
        this.props.resetRegistration2();
        this.props.resetRegistration3();
    }


    render() {
        return (
    <React.Fragment>
				<React.Fragment>
                    {this.state.loading ? (
                    <div className="modelLoader"></div>) : (<div className="modelLoader loaded"></div>)}
                    <Head><title>Деньги в кредит</title></Head>
                    <Stepper className="otherPages" activeStep={this.state.registrationStep > this.props.stepregistration && this.state.registrationStep>1 ? parseInt(this.state.registrationStep)-1 : parseInt(stepcheck(this.props.stepregistration))}
                    style={{ paddingTop: 30, paddingBottom: 50 }} alternativeLabel>
						{labels.map(label => (
							<Step key={label} >
								<StepLabel >{label}</StepLabel>
							</Step>
						))}
					</Stepper>

                    {this.state.registrationStep > this.props.stepregistration && this.state.registrationStep>1 ? handleSteps(parseInt(this.state.registrationStep)) : handleSteps(parseInt(this.props.stepregistration))}

				</React.Fragment>
		</React.Fragment>
        )
    }
}

export default (connect(mapStateToProps,mapDispatchToProps)(FormStep));
