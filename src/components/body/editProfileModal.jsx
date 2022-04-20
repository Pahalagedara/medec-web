import React, {useState} from 'react';
import {Button, Col, Form, Image, Modal, Row} from "react-bootstrap";
import {bloodGroups, tittle} from "../../const/const";
import {checkForm, formatPhoneNumber, setErrors} from "../../func/formUtility";
import defaultProfilePicture from "../../assets/images/defaultprofilepic.png";

function EditProfileModal(props) {

    const [profile, setProfile] = useState(props.profile);
    const [errors, seterrors] = useState({error:{}});
    const [hasEdit, setHasEdit] = useState(false);

    const onChange = (e) => {
        setProfile({...profile,[e.target.name]:e.target.value});
        setHasEdit(true);
        if (e.target.name==='firstName' || e.target.name==='lastName'){
            setProfile({...profile,[e.target.name]:e.target.value});
        } else if(e.target.name==='phoneNumber'){
            let phoneNumber = formatPhoneNumber(e.target.value);
            setProfile({...profile,[e.target.name]:phoneNumber});
        }
    }

    const isSaveDisabled = () => {
      let formElements = document.querySelectorAll("[aria-required='true']");
      let isFormFiled = checkForm(formElements);
      if (isFormFiled){
          return(!hasEdit || Object.keys(errors).length>1)
      } else {
          return (hasEdit || !Object.keys(errors).length>1)
      }
    }

    const clientSideValidation = (event) => {
      let error = setErrors(event, errors);
      seterrors({...errors,error});
    }

    const handleAria = (errorName, elementName) => {
      if (errorName === '' || errorName === undefined){
          document.getElementById(elementName).removeAttribute("aria-invalid");
      } else {
          document.getElementById(elementName).setAttribute("aria-invalid",true);
      }
    }

    const handleInputAria = (event) => {
      let error = errors;
      if (event.target.id === 'firstName'){
          handleAria(error["firstName"], event.target.id);
      } else if (event.target.id === 'lastName'){
          handleAria(error['lastName'], event.target.id);
      } else if (event.target.id === 'address'){
          handleAria(error['address'], event.target.id);
      }  else if (event.target.id === 'phoneNumber'){
          handleAria(error['phoneNumber'], event.target.id);
      }
    }

    return (
            <Modal className='edit-profile-modal' show={props.visibility} onHide={props.closeModal}  backdrop="static"
                   size="lg" dialogClassName="modal-70w" aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={profile.profilePicture ? profile.profilePicture : defaultProfilePicture} fluid={true} width={200}/>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Tittle <span>*</span>
                            </Form.Label>
                            :<Col sm={2}>
                                <Form.Select
                                    id='tittle'
                                    defaultValue={profile.tittle}
                                    name='tittle'
                                    aria-required={true}
                                    onChange={onChange}>
                                    <option value={''}>select country code</option>
                                    {tittle.map((item, index) => (
                                        <option key={index} value={item.tittle}>{item.tittle}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                First Name <span>*</span>
                            </Form.Label>
                            :<Col sm={7}>
                            <Form.Control
                                id='firstName'
                                type='text'
                                name='firstName'
                                placeholder={'enter First Name'}
                                value={profile.firstName}
                                aria-required={true}
                                aria-describedby='fName'
                                maxLength={17}
                                onChange={onChange}
                                onBlur={clientSideValidation}
                                onFocus={handleInputAria}/>
                                <span id='fName' className='form-error' role='status'>{errors.firstName}</span>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Last Name <span>*</span>
                            </Form.Label>
                            :<Col sm={7}>
                                <Form.Control
                                    id='lastName'
                                    type='text'
                                    name='lastName'
                                    placeholder={'enter Last Name'}
                                    value={profile.lastName}
                                    aria-required={true}
                                    aria-describedby='lName'
                                    maxLength={17}
                                    onChange={onChange}
                                    onBlur={clientSideValidation}
                                    onFocus={handleInputAria}/>
                                <span id='lName' className='form-error' role='status'>{errors.lastName}</span>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Date Of Birth <span>*</span>
                            </Form.Label>
                            :<Col sm={3}>
                                <Form.Control
                                    id='input'
                                    type='date'
                                    name='birthDate'
                                    value={profile.birthDate}
                                    aria-required={true}
                                    onChange={onChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Blood Group <span>*</span>
                            </Form.Label>
                            :<Col sm={2}>
                                <Form.Select
                                    id='input'
                                    defaultValue={profile.bloodGroup}
                                    name='bloodGroup'
                                    aria-required={true}
                                    onChange={onChange}>
                                    <option value={'Add blood group'}>select blood group</option>
                                    {bloodGroups.map((item, index) => (
                                        <option key={index} value={item.bloodGroup}>{item.bloodGroup}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                phone Number <span>*</span>
                            </Form.Label>
                                :<Col sm={2}>
                                    <Form.Select
                                        id='input'
                                        name='country'
                                        defaultValue={profile.country}
                                        aria-required={true}
                                        onChange={onChange}>
                                        <option value={''}>select country code</option>
                                        <option value={'+94'}>+94</option>
                                        <option value={'+96'}>+96</option>
                                    </Form.Select>
                                </Col>
                                <Col sm={5}>
                                    <Form.Control
                                        id='phoneNumber'
                                        type='text'
                                        name='phoneNumber'
                                        placeholder='Enter your mobile number'
                                        value={profile.phoneNumber}
                                        maxLength={11}
                                        aria-required={true}
                                        aria-describedby='tp'
                                        onChange={onChange}
                                        onBlur={clientSideValidation}
                                        onFocus={handleInputAria}/>
                                    <span id='tp' className='form-error' role='status'>{errors.phoneNumber}</span>
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Address <span>*</span>
                            </Form.Label>
                            :<Col sm={7}>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    id="address"
                                    type='text'
                                    name='address'
                                    placeholder='Enter your Address'
                                    value={profile.address}
                                    aria-required={true}
                                    maxLength={100}
                                    aria-describedby='ad'
                                    onChange={onChange}
                                    onBlur={clientSideValidation}
                                    onFocus={handleInputAria}/>
                                <span id='ad' className='form-error' role='status'>{errors.address}</span>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Description
                            </Form.Label>
                            :<Col sm={7}>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    id='input'
                                    type='text'
                                    name='description'
                                    placeholder='Enter your allergies, special conditions here'
                                    value={profile.description}
                                    onChange={onChange}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal} disabled={!isSaveDisabled()}>
                        Discard
                    </Button>
                    <Button variant="primary" onClick={()=>{props.updateProfile(profile)}} disabled={isSaveDisabled()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
}

export default EditProfileModal;