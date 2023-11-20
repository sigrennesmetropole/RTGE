/* eslint-disable no-console */
import React from "react";
import PropTypes from 'prop-types';
import Message from "@mapstore/components/I18N/Message";
import { RTGE_PANEL_WIDTH } from "../constants/rtge-constants.js";
import { tabTypes } from "../actions/rtge-action.js";
import ResponsivePanel from "@mapstore/components/misc/panels/ResponsivePanel";

import {
    Form,
    FormControl,
    FormGroup,
    Glyphicon,
    InputGroup,
    Label,
    Checkbox
} from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
export class RTGEComponent extends React.Component {

    static propTypes= {
        active: PropTypes.bool,
        value: PropTypes.number,
        element: PropTypes.string,
        dockStyle: PropTypes.object,
        panelClassName: PropTypes.string,
        width: PropTypes.number,
        activeTab: PropTypes.string,
        activeSelection: PropTypes.string,
        changeZoomLevel: PropTypes.func,
        toggleControl: PropTypes.func,
        changeTab: PropTypes.func,
        selectedTiles: PropTypes.array,
        user: PropTypes.object,
        switchDraw: PropTypes.func,
        removeSelectedTiles: PropTypes.func,
        clickTable: PropTypes.func
    }

    static defaultProps= {
        active: false,
        value: 0,
        element: 'RTGE:WELCOME',
        dockStyle: {zIndex: 100},
        panelClassName: 'rtge-panel',
        width: RTGE_PANEL_WIDTH,
        activeTab: tabTypes.HOME,
        selectedTiles: [],
        user: {
            prenom: 'Benoit',
            nom: 'DAVID',
            collectivite: 'Rennes Metropole',
            service: 'Service Information Géographique',
            courriel: 'b.david@rennesmetropole.fr',
            telephone: '+33600000000',
            motivation: '',
            dataSurf: false,
            dataUnderSurf: false
        },
        activeSelection: '',
        changeZoomLevel: ()=>{},
        toggleControl: ()=>{},
        changeTab: ()=>{},
        switchDraw: ()=>{},
        removeSelectedTiles: ()=>{},
        clickTable: ()=>{}
    }

    constructor(props) {
        super(props);
        this.state = {
            prenom: this.props.user.prenom,
            nom: this.props.user.nom,
            collectivite: this.props.user.collectivite,
            service: this.props.user.service,
            courriel: this.props.user.courriel,
            telephone: this.props.user.telephone,
            motivation: this.props.user.motivation,
            dataSurf: this.props.user.dataSurf,
            dataUnderSurf: this.props.user.dataUnderSurf
        };
    }

    // TODO
    // ajouter componentDidMount() pour ajouter tout les éléments à mettre en place une fois le composant monté
    // pareil pour le componentDidUpdate(prevProp,prevState) mais pour mettre à jour la vue une fois déjà montée

    /**
     * onClose closes the plugins Panel
     * @memberof rtge.component
     * @returns - toggleControl action
     */
    onClose() {
        return this.props.toggleControl();
    }

    /**
     * getForm get data from plugins form
     * @memberof rtge.component
     * @returns - form values as json
     */
    getForm() {
        // var formContent = {
        //     prenom: this.state.prenom,
        //     nom: this.state.nom,
        //     collectivite: this.state.collectivite,
        //     service: this.state.service,
        //     courriel: this.state.courriel,
        //     telephone: this.state.telephone,
        //     motivation: this.state.motivation,
        //     dataSurf: this.state.dataSurf,
        //     dataUnderSurf: this.state.dataUnderSurf
        // };
    }

    /**
     * renderPrenomField Renders prenom field for the form
     * @memberof rtge.component
     * @returns - dom parts for the prenom field
     */
    renderPrenomField() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.prenom">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.prenom" />
                        </Label>
                        <FormControl
                            type="text"
                            value={this.state.prenom}
                            onChange={(e) => this.handleTextFieldChange(e, 'prenom')}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderNomField Renders nom field for the form
     * @memberof rtge.component
     * @returns - dom parts for the nom field
     */
    renderNomField() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.nom">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.nom" />
                        </Label>
                        <FormControl
                            type="text"
                            value={this.state.nom}
                            onChange={(e) => this.handleTextFieldChange(e, 'nom')}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderCollectiviteField Renders collectivites field for the form
     * @memberof rtge.component
     * @returns - dom parts for the collectivites field
     */
    renderCollectiviteField() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.collectivite">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.collectivite" />
                        </Label>
                        <FormControl
                            type="text"
                            value={this.state.collectivite}
                            onChange={(e) => this.handleTextFieldChange(e, 'collectivites')}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderService Renders service field for the form
     * @memberof rtge.component
     * @returns - dom parts for the service field
     */
    renderService() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.service">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.service" />
                        </Label>
                        <FormControl
                            type="text"
                            value={this.state.service}
                            onChange={(e) => this.handleTextFieldChange(e, 'service')}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderCourriel Renders courriel field for the form
     * @memberof rtge.component
     * @returns - dom parts for the courriel field
     */
    renderCourriel() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.courriel">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.courriel" />
                        </Label>
                        <FormControl
                            type="text"
                            value={this.state.courriel}
                            onChange={(e) => this.handleTextFieldChange(e, 'courriel')}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderTelephone Renders phone field for the form
     * @memberof rtge.component
     * @returns - dom parts for the phone field
     */
    renderTelephone() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.telephone">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.telephone" />
                        </Label>
                        <PhoneInput
                            defaultCountry="FR"
                            placeholder="Entrez un numéro de téléphone"
                            value={this.state.telephone}
                            onChange={(e) => this.handlePhoneFieldChange(e, 'telephone')}/>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderMotivation Renders motivation field for the form
     * @memberof rtge.component
     * @returns - dom parts for the motivation field
     */
    renderMotivation() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.motivation">
                    <InputGroup>
                        <Label>
                            <Message msgId="RTGE.motivation" />
                        </Label>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.motivation}
                            onChange={(e) => this.handleTextFieldChange(e, 'motivation')}
                            rows={4}
                            cols={50}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    /**
     * renderDataSurf Renders data surface checkbox field for the form
     * @memberof rtge.component
     * @returns - dom parts for the data surface checkbox field
     */
    renderDataSurf() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.dataSurf">
                    <Label>
                        <Message msgId="RTGE.dataSurf" />
                    </Label>
                    <Checkbox
                        onChange={() => this.handleBooleanFieldChange('dataSurf')}
                    />
                </FormGroup>
            </div>
        );
    }

    /**
     * renderDataUnderSurf Renders data under surface checkbox field for the form
     * @memberof rtge.component
     * @returns - dom parts for the data under surface checkbox field
     */
    renderDataUnderSurf() {
        return (
            <div className="formUnit">
                <FormGroup controlId="rtgeForm.dataUnderSurf">
                    <Label>
                        <Message msgId="RTGE.dataUnderSurf" />
                    </Label>
                    <Checkbox
                        onChange={() => this.handleBooleanFieldChange('dataUnderSurf')}
                    />
                </FormGroup>
            </div>
        );
    }

    /**
     * renderHomeTab home tab content
     * @memberof rtge.component
     * @returns - dom of the home tab content
     */
    renderHomeTab() {
        return (
            <div id="SAMPLE_EXTENSION" >
                <div className="paragraphs">
                    <p className="title mainTitle">Outil d'extraction de dalles du Référentiel Métropolitain Topographique et Réseaux.</p>

                    <p className="title">Limites et conditions d'utilisation</p>
                    <p>Les données du RMTR consultables ici le sont à titre informatif uniquement. Il n'est pas possible de garantir sur cet outil des mesures de précision topographique sur les données. Il faut se reporter sur les outils spécialisés pour ce genre d'exploitation (AutoCAD, TopStation).</p>

                    <p>Les données concernant les réseaux sont en accès restreint. La possibilité de consulter ces données ne vous dispense pas de faire toutes les démarches nécessaires à un projet, notamment les demandes de DT/DICT. Contacter le service Information Géographique si vous avez besoin de consulter les données de réseaux du sous-sol.</p>

                    <p className="title">Principe d'utilisation</p>
                    <p>Les données du RMTR sont découpées en dalle de 140x200m qui couvre Rennes Métropole.<br />
                        Une demande d'extraction se formule donc sous la forme d'une liste de dalles.<br />
                        La demande sera traitée par le service Information Géographique qui vous renverra 1 fichier DXF.<br />
                        La limite du nombre de dalles maximum par demande est de 50.</p>

                    <p className="title">Mode d'emploi</p>
                    <p>1. Utiliser 1 des 3 outils de sélection pour sélectionner les dalles dont vous avez besoin. Affiner votre sélection si nécessaire (ajouter / supprimer).<br />
                        2. Cliquer sur le bouton 'Envoi'<br />
                        3. Remplir les champs et motiver votre demande en indiquant le projet d'aménagement ou le besoin.<br />
                        4. Préciser si cela concerne les données de surface et/ou de sous-sol<br />
                        5. Valider la demande</p>
                </div>
            </div>
        );
    }

    /**
     * renderSendTab renders all the form elements in one place
     * @memberof rtge.component
     * @returns - organise the plugins form
     */
    renderSendTab() {
        return (
            <div className="formGlobal">
                <Form>
                    {this.renderPrenomField()}
                    {this.renderNomField()}
                    {this.renderCollectiviteField()}
                    {this.renderService()}
                    {this.renderCourriel()}
                    {this.renderTelephone()}
                    {this.renderMotivation()}
                    {this.renderDataSurf()}
                    {this.renderDataUnderSurf()}
                </Form>
                <button className="buttonForm" onClick={this.getForm()}>Envoyer</button>
            </div>
        );
    }

    /**
     * renderSelectionTab renders the selection tab
     * @memberof rtge.component
     * @returns - selection tab dom content
     */
    renderSelectionTab() {
        return (
            <div>
                <div className="row text-center">
                    <button className={this.props.activeSelection === 'Point' ? "selectorButton active" : "selectorButton"} onClick={() => this.props.switchDraw('Point')}><Glyphicon glyph="map-marker"/></button>
                    <button className={this.props.activeSelection === 'LineString' ? "selectorButton active" : "selectorButton"} onClick={() => this.props.switchDraw('LineString')}><Glyphicon glyph="polyline"/></button>
                    <button className={this.props.activeSelection === 'Polygon' ? "selectorButton active" : "selectorButton"} onClick={() => this.props.switchDraw('Polygon')}><Glyphicon glyph="polygon"/></button>
                    <button className={this.props.selectedTiles.length === 0 ? "selectorButton empty" : "selectorButton"} onClick={() => this.props.selectedTiles.length === 0 ? '' : this.props.removeSelectedTiles()}><Glyphicon glyph="trash"/></button>
                </div>
                <div className="row">
                    <div className="row tableOffset">
                        <div className="col-sm-3 text-center selectTitle">Identifiant</div>
                        <div className="col-sm-3 text-center selectTitle">Date MAJ</div>
                        <div className="col-sm-3 text-center selectTitle">Nb objets surface</div>
                        <div className="col-sm-3 text-center selectTitle">nb objets sous sol</div>
                    </div>
                    <div className="scrollBar">
                        {
                            this.props.selectedTiles.map((val, key) => {
                                return (
                                    <div className={val.properties.selected ? "row arraySelected" : "row"} key={key} onClick={(e) => this.props.clickTable(val, e.ctrlKey)}>
                                        <div className="col-sm-3 text-center">{val.properties.cases_200}</div>
                                        <div className="col-sm-3 text-center">{val.properties.date_der_maj}</div>
                                        <div className="col-sm-3 text-center">{val.properties.nb_donnees_surf}</div>
                                        <div className="col-sm-3 text-center">{val.properties.nb_donnees_ssol}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    /**
     * renderTabMenu renders the selection tabs to get all plkugins sub parts
     * @memberof rtge.component
     * @returns - navbar like for the plugin
     */
    renderTabMenu() {
        return (
            <div className="row rowTabs">
                <div className="col-sm-4 text-center">
                    <button className={this.props.activeTab === "RTGE:HOME" ? "homeButton active" : "homeButton"} onClick={() => this.props.changeTab(tabTypes.HOME)}>
                        Accueil
                    </button>
                </div>
                <div className="col-sm-4 text-center">
                    <button className={this.props.activeTab === "RTGE:SELECT" ? "selectButton active" : "selectButton"} onClick={() => this.props.changeTab(tabTypes.SELECT)}>
                        Selection
                    </button>
                </div>
                <div className="col-sm-4 text-center">
                    <button className={this.props.activeTab === "RTGE:SEND" ? "sendButton active" : "sendButton"} onClick={() => this.props.changeTab(tabTypes.SEND)}>
                        Envoi
                    </button>
                </div>
            </div>
        );
    }

    /**
     * renderContent organise which tab is active
     * @memberof rtge.component
     * @returns - tab dom content
     */
    renderContent() {
        var content;
        switch (this.props.activeTab) {
        case tabTypes.HOME:
            content = this.renderHomeTab();
            break;
        case tabTypes.SELECT:
            content = this.renderSelectionTab();
            break;
        case tabTypes.SEND:
            content = this.renderSendTab();
            break;
        default:
            break;
        }
        return content;
    }

    /**
     * render component
     * @memberof rtge.component
     * @returns - Mapstore ResponsivePanel with our data inside
     */
    render() {
        if (this.props.active) {
            return (
                <ResponsivePanel
                    containerStyle={this.props.dockStyle}
                    style={this.props.dockStyle}
                    containerId="ms-rtge-panel"
                    containerClassName="rtge-dock-container"
                    className={this.props.panelClassName}
                    open={this.props.active}
                    position="right"
                    size={this.props.width}
                    bsStyle="primary"
                    title={<Message msgId="RTGE.title"/>}
                    glyph="map-marker"
                    onClose={() => this.props.toggleControl('rtge', null)}>
                    {this.renderTabMenu()}
                    {this.renderContent()}
                </ResponsivePanel>
            );
        }
        return null;
    }

    /**
     * handleTextFieldChange when a text field change, it updates the state
     * @memberof rtge.component
     * @param e - javascript event object
     * @param fieldName - name of the field which is to update
     * @returns - nothing
     */
    handleTextFieldChange(e, fieldName) {
        this.state[fieldName] = e.target.value;
        this.setState(this.state);
    }

    /**
     * handlePhoneFieldChange when the phone field change, it updates the state
     * @memberof rtge.component
     * @param e - javascript event object
     * @param fieldName - name of the field which is to update
     * @returns - nothing
     */
    handlePhoneFieldChange(e, fieldName) {
        this.state[fieldName] = e;
        this.setState(this.state);
    }

    /**
     * handleBooleanFieldChange when the booleans fields change, it updates their state
     * @memberof rtge.component
     * @param fieldName - name of the field which is to update
     * @returns - nothing
     */
    handleBooleanFieldChange(fieldName) {
        this.state[fieldName] = !this.state[fieldName];
        this.setState(this.state);
    }
}
