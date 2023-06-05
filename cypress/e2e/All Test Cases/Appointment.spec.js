describe('Appointment Suite', function()
{

it('Create an appointment for a patient with a doctor', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click().type('Test')
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //select for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().wait(500)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click().wait(500)
        //select date
        cy.get('.AlmightyDatetimePicker__field').click()
        //pick the date
        cy.get('div > :nth-child(37)').click()
        //confirm the date picked
        cy.get('.AlmightyDatetimeModal__confirm').click()
        //click the time filed
        cy.get('.AlmightyTimeDropdown__label > .multiselect > .multiselect__tags').click()
        //select the time
        cy.get(':nth-child(41) > .multiselect__option > .AlmightyTimeDropdown__option').click()

        //Select the clinic
        cy.get('[for="clinic"] > .multiselect > .multiselect__tags').click()

        //click on the reason field
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__tags').click().wait(2000)
        //Select the reason
        cy.get(':nth-child(3) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click().wait(1000)

        //click on confirm
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(3000)

    })









    it('Create an appointment for a patient with a team', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click().type('Test')
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //select for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().wait(500)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click().wait(500)
        //select date
        cy.get('.AlmightyDatetimePicker__field').click()
        //pick the date
        cy.get('div > :nth-child(37)').click()
        //confirm the date picked
        cy.get('.AlmightyDatetimeModal__confirm').click()
        //click the time filed
        cy.get('.AlmightyTimeDropdown__label > .multiselect > .multiselect__tags').click()
        //select the time
        cy.get(':nth-child(41) > .multiselect__option > .AlmightyTimeDropdown__option').click()

        //Select the clinic
        cy.get('[for="clinic"] > .multiselect > .multiselect__tags').click()

        //click on the reason field
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__tags').click().wait(2000)
        //Select the reason
        cy.get(':nth-child(3) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click().wait(1000)

        //click on confirm
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(3000)

    })












    it('Create an appointment for a new patient', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click().type('Test')
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //select for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().wait(500)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click().wait(500)
        //select date
        cy.get('.AlmightyDatetimePicker__field').click()
        //pick the date
        cy.get('div > :nth-child(37)').click()
        //confirm the date picked
        cy.get('.AlmightyDatetimeModal__confirm').click()
        //click the time filed
        cy.get('.AlmightyTimeDropdown__label > .multiselect > .multiselect__tags').click()
        //select the time
        cy.get(':nth-child(41) > .multiselect__option > .AlmightyTimeDropdown__option').click()

        //Select the clinic
        cy.get('[for="clinic"] > .multiselect > .multiselect__tags').click()

        //click on the reason field
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__tags').click().wait(2000)
        //Select the reason
        cy.get(':nth-child(3) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click().wait(1000)

        //click on confirm
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(3000)

    })















    it('Create an appointment with a doctor whose access has been revoked', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click()
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //search for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().type('Test Test').wait(2000)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()
        //select date
        cy.get('.AlmightyDatetimePicker__field').click()
        //pick the date
        cy.get('div > :nth-child(37)').click()
        //confirm the date picked
        cy.get('.AlmightyDatetimeModal__confirm').click()
        //click the time filed
        cy.get('.AlmightyTimeDropdown__label > .multiselect > .multiselect__tags').click()
        //select the time
        cy.get(':nth-child(41) > .multiselect__option > .AlmightyTimeDropdown__option').click()

        //click on the reason field
        cy.get('.DetailsFields > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
        //Select the reason
        cy.get('.DetailsFields > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()

        //click on confirm
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)

        //Verify that this fails
        cy.get('.toast-message').contains('Request failed with status code 422')

    })








    it('Filter Appointments', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click()
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //search for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().type('Test Test').wait(2000)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()
        //select date
      cy.get('.toast-message').contains('Request failed with status code 422')

    })
















    it('Refresh Calender', function()
    {
        cy.login()
        //click on appointment
        cy.get('[ng-href="/appointments"]').click()
        //Click on Add appointment
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //search for a registered patient
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click()
        //Select the test patient
        cy.get(':nth-child(3) > .multiselect__option > .AlmightyPatient__option').click()
        //search for a doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click().type('Test Test').wait(2000)
        //Select the doctor
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()
        //select date
      cy.get('.toast-message').contains('Request failed with status code 422')

    })


})