import React from 'react'
import Email from './Email'
import Name from './Name'
import Address from './Address'
import PersonalInfo from './PersonalInfo'

function Profile() {
  return (
    <div className='class'>
    
    <Email email="E-mail:aynurmammadova@gmail.com"/>
    <Name name="Name:Aynur"/>
    <Address adress="Adress:Baku city"/>
    <PersonalInfo personalInfo="Personal Information:Personal Information"/>
    </div>


  )
}

export default Profile