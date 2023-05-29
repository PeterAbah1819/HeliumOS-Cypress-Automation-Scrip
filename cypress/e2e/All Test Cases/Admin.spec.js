describe('Admin Suite', function()
{

//Update Institution Bio
   it('Update Institution Bio', function()
   {
     cy.logins()

     //Settings Module Tabs-Profile
     cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
     cy.get('[ng-href="institution-profile"] > .NavSidebar__menu-option-label').click()
     
     //Edit Type field
     cy.get('.InstitutionProfile__avatar-row__type > .field-ui-singleselect > .InstitutionProfile__field-capitalize > .btn-default > .ui-select-match-text').click()
     cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click().wait(100)
     cy.get('.InstitutionProfile__avatar-row__type > .field-ui-singleselect > .InstitutionProfile__field-capitalize > .btn-default > .ui-select-match-text').click()
     cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click()
     cy.get('.InstitutionProfile__avatar-row__type > .field-ui-singleselect > .InstitutionProfile__field-capitalize > .btn-default > .ui-select-match-text').click()
     cy.get('#ui-select-choices-row-1-2 > .ui-select-choices-row-inner').click()
     
      //Edit Name Field
      cy.get('.InstitutionProfile__avatar-row__name > .field').click().clear().type('Cypress Test Hospital', {delay: 10})
      //Edit About field
      cy.get('.InstitutionProfile__form-textarea').click().clear().type('Competent Cypress testers')
      //Edit currency Field
      cy.contains('Nigerian naira').click()
      cy.contains('Libyan dinar').scrollIntoView().should('be.visible').click()
      cy.contains('Libyan dinar').click()
      cy.contains('Nigerian naira').click()
      cy.get('.InstitutionProfile__footer > .btn').click().wait(500)

      //Click out of the profile page and back in to confirm the changes were saved
      cy.get('[ng-href="staff"]').click()
      cy.get('[ng-href="institution-profile"] > .NavSidebar__menu-option-label').click()
      //cy.get('#editInstitutionForm > :nth-child(1) > :nth-child(4) > :nth-child(1) > .field').should('have.text', 'cypress-hospital.com')
      //cy.get('.InstitutionProfile__avatar-row__name > .field').should('have.text', 'Cypress Test Hospital')
   })





//Update Institution Contact
   it('Update Institution Contact', function()
   {
     cy.logins()


     //Settings Module Tabs-Staff
     cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
     cy.get('[ng-href="institution-profile"] > .NavSidebar__menu-option-label').click()

     //Edit Phone Number field
     cy.get('[ng-class="vm.displayError(vm.form.phone)"] > .field').click()
     cy.get('[ng-class="vm.displayError(vm.form.phone)"] > .field').clear().type('080123456789')
     cy.wait(2000)   

     //Edit Email field
     cy.get('[ng-class="vm.displayError(vm.form.email)"] > .field').click().clear().type('test@cypress.com', {delay: 10})
     
     //Edit Website field
     cy.get('#editInstitutionForm > :nth-child(1) > :nth-child(4) > :nth-child(1) > .field').click().clear().type('cypress.hospital.com', {delay: 10})

     //Edit Facility Address field
     cy.get(':nth-child(2) > :nth-child(2) > .Grid-column-12 > .field').click().clear().type('No 1 Cypress Hospital Road, Isolo{enter}', {delay: 10})
     cy.get('.pac-item').click()

     //Edit Country field
     cy.get(':nth-child(3) > :nth-child(1) > .field-ui-singleselect > .ui-select-match > .btn-default > .ui-select-match-text').click({delay: 10})
     cy.get('#ui-select-choices-row-4-3 > .ui-select-choices-row-inner').click()

     //Edit State field
     cy.get('[ng-class="vm.displayError(vm.form.state)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
     cy.get('#ui-select-choices-row-5-0 > .ui-select-choices-row-inner').click()
     //Edit City field
     cy.get('[ng-class="vm.displayError(vm.form.city)"] > .field').click().clear().type('Lagos', {delay: 10})
      
     //Edit Additional info field
     cy.get(':nth-child(2) > :nth-child(4) > :nth-child(2) > .field').click().clear().type('First street after the traffic light', {delay: 10})
 
     //Edit Email for recieving notifications field
     cy.get(':nth-child(3) > :nth-child(2) > .Grid-column-12 > .field').click().clear().type('test@cypress.com', {delay: 10})

     //Edit Title of Contact Person
     cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click()
     cy.get('#ui-select-choices-row-6-5 > .ui-select-choices-row-inner').click()
     
     //Edit First name of Contact Person
     cy.get(':nth-child(3) > :nth-child(4) > :nth-child(2) > .field').click().clear().type('Cypress', {delay: 10})
     
     //Edit Last name of Contact Person
     cy.get(':nth-child(4) > :nth-child(3) > .field').click().clear().type('Tester', {delay: 10})


     cy.get('.InstitutionProfile__footer > .btn').click().wait(500)

   })





//Update Institution Help Text/Opening hours
   it('Update Institution Help Text/Opening hours', function()
   {
     cy.logins()


     //Settings Module Tabs-Profile
     cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
     cy.get('[ng-href="institution-profile"] > .NavSidebar__menu-option-label').click()
      
     //Type help text
      cy.get('p').last().click({ force: true }).clear()
      cy.get('p').type('Cypress types into this box what should be displayed when the "Help" link is clicked', {delay: 10})
     
      //check all days of the week
       //cy.get(':nth-child(1) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick')
        //Edit Opening hours field
        cy.get(':nth-child(1) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(1) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().click().clear().type('01:00')
        cy.get(':nth-child(1) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('02:00')

        cy.get(':nth-child(2) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(2) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('03:00')
        cy.get(':nth-child(2) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('04:00')

        cy.get(':nth-child(3) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(3) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('05:00')
        cy.get(':nth-child(3) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('06:00')

        cy.get(':nth-child(4) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(4) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('07:00')
        cy.get(':nth-child(4) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('08:00')
    
        cy.get(':nth-child(5) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(5) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('09:00')
        cy.get(':nth-child(5) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('10:00')
    
        cy.get(':nth-child(6) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(6) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('11:00')
        cy.get(':nth-child(6) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('12:00')
    
        cy.get(':nth-child(7) > .InstitutionProfile__opening-hours-open > .status--all > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click
        cy.get(':nth-child(7) > .InstitutionProfile__opening-hours-from > .InstitutionProfile__form-input > .field').click().clear().type('13:00')
        cy.get(':nth-child(7) > .InstitutionProfile__opening-hours-to > .InstitutionProfile__form-input > .field').click().clear().type('14:00')
        
        //save it
        cy.get('.InstitutionProfile__footer > .btn').click()
        cy.wait(3000)
   })
 




//Create a new Team   
    it('Create a new Team', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()

      //Manage Teams Tab
      cy.get('.header-splitted > .header-splitted-col > .header-nav-tabs > [ui-sref="teams"]').click().wait(500)

      //Add new team
      cy.get(':nth-child(1) > .header-link').click()
      cy.get('#team_name').click().type('Team Testers')
      

      //Set the store access
      cy.get('[ng-if="vm.featureFlags.MANAGE_STAFF_STORES_ACCESS"] > .col-xs-12 > .field > :nth-child(1)').click()
      cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click()
      cy.scrollTo('top', {ensureScrollable: false}, { easing: 'linear' })

      //Set the Pharamacy access
      cy.get('[ng-if="vm.featureFlags.MANAGE_STAFF_PHARMACY_ACCESS"] > .col-xs-12 > .field > :nth-child(1) > #permitted_stores').click()
      cy.get('#ui-select-choices-row-2-2 > .ui-select-choices-row-inner > .ng-binding').click()

      //Set form category permission
      cy.get('#form_category_permissions').click()
      cy.get('#ui-select-choices-row-3-0 > .ui-select-choices-row-inner').click()


      //Give full write access
      cy.get(':nth-child(1) > :nth-child(3) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      cy.get(':nth-child(5) > .TeamEdit__avatars-radio-label > .TeamEdit__avatars-radio-img').click()

      //Set access rights-Clinical History
      cy.get(':nth-child(1) > .fields > :nth-child(1) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Social History
      cy.get(':nth-child(1) > .fields > :nth-child(2) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Contact/Insurance info
      cy.get(':nth-child(1) > .fields > :nth-child(3) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Billing
      cy.get(':nth-child(1) > .fields > :nth-child(4) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Comment Entry
      cy.get(':nth-child(1) > .fields > :nth-child(5) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Admit/Discharge
      cy.get(':nth-child(1) > .fields > :nth-child(6) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-File Upload
      cy.get(':nth-child(1) > .fields > :nth-child(7) > .form-radio-container > :nth-child(2) > .form-radio-label').click()

      //Set access rights-Immunization
      cy.get(':nth-child(8) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Lab result
      cy.get(':nth-child(9) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Clinical Investigation
      cy.get(':nth-child(10) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Encounter note
      cy.get(':nth-child(11) > .form-radio-container > :nth-child(4) > .form-radio-label').click()

      //Set access rights-Vitals
      cy.get(':nth-child(3) > :nth-child(1) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Prescriptions
      cy.get(':nth-child(3) > :nth-child(2) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Referral
      cy.get(':nth-child(3) > :nth-child(3) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Patients Update
      cy.get(':nth-child(3) > :nth-child(4) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Calendar
      cy.get(':nth-child(3) > :nth-child(5) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Antenatal
      cy.get(':nth-child(3) > :nth-child(6) > .form-radio-container > :nth-child(4) > .form-radio-label').click({force: true})

      //Set access rights-Patient Registration
      cy.get(':nth-child(7) > :nth-child(1) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Pharmacy and Inventory
      cy.get(':nth-child(7) > :nth-child(2) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Billing Management
      cy.get(':nth-child(7) > :nth-child(3) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Insights
      cy.get(':nth-child(7) > :nth-child(4) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Reports
      cy.get(':nth-child(7) > :nth-child(5) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Accept appointments
      cy.get(':nth-child(7) > :nth-child(6) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Patient check-in
      cy.get(':nth-child(7) > :nth-child(7) > .form-radio-container > :nth-child(3) > .form-radio-label').click({force: true})

      //Set access rights-Finance
      cy.get(':nth-child(7) > :nth-child(8) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access rights-Communication
      cy.get(':nth-child(7) > :nth-child(9) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access rights-Lab Orders
      cy.get(':nth-child(7) > :nth-child(10) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access rights-Approving lab results
      cy.get(':nth-child(7) > :nth-child(11) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access rights-Imaging Order
      cy.get(':nth-child(12) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access rights-Approving imaging results
      cy.get(':nth-child(13) > .form-radio-container > :nth-child(3) > .form-radio-label').click()


      //Set access for inventory
      cy.get(':nth-child(13) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access for requisition
      cy.get(':nth-child(14) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Set access to administer drugs
      cy.get(':nth-child(15) > .form-radio-container > :nth-child(3) > .form-radio-label').click()


//Set all the permissions not selected
      cy.get(':nth-child(16) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(17) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(18) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(19) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(20) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(21) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(22) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(23) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(24) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      cy.get(':nth-child(25) > .form-radio-container > :nth-child(3) > .form-radio-label').click()     //Set access rights-Patient search
      
      cy.get(':nth-child(26) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(27) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(28) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(29) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(30) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      cy.get(':nth-child(31) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      
      
      //cy.get(':nth-child(14) > .form-radio-container > :nth-child(3) > .form-radio-label').click()

      //Scroll up and wait lets check
      cy.scrollTo('top', {ensureScrollable: false}, { easing: 'linear' })
      cy.wait(3000)


      //Click submit button
      cy.get('.submit-btn').click()
      cy.wait(3000)
    
    })
    



//Edit a team    
    it('Edit a team', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()


      //Edit team
      cy.get('.header-splitted > div.header-splitted-col > .header-nav-tabs > [ui-sref="teams"]').click().wait(500)
      cy.get('[class="Teams__edit-link ng-binding"]').first().click({force: true})
      cy.get('#team_name').clear().type('Team Testers', {delay: 10})
      //input queue name
      cy.get('.btn-default').click()
      cy.get('#ui-select-choices-row-1-3 > .ui-select-choices-row-inner').click()
      cy.get(':nth-child(1) > .fields > :nth-child(11) > .form-radio-container > :nth-child(3) > .form-radio-label').click()
      cy.get('.submit-btn').click().wait(1000)

    })




    it('Search team', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()
      cy.get('.header-splitted > div.header-splitted-col > .header-nav-tabs > [ui-sref="teams"]').click()
      cy.get('#HeaderSearch').clear().type('Team Testers', {delay: 10})
      cy.wait(2000)
      cy.get('.Teams__table-body-row > :nth-child(2)').should('be.visible').should('contain', 'Team Testers')
      cy.wait(2000)
    })





    it('Remove a team', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()

      //Add another team
      cy.get('.header-splitted > div.header-splitted-col > .header-nav-tabs > [ui-sref="teams"]').click()
      cy.get(':nth-child(1) > .header-link').click()
      cy.get('#team_name').click().type('AaNew Team3', {delay: 10})
      cy.get(':nth-child(5) > .TeamEdit__avatars-radio-label > .TeamEdit__avatars-radio-img').click()
      cy.get(':nth-child(1) > :nth-child(3) > .form-radio-container > :nth-child(4) > .form-radio-label').click()
      cy.get('.submit-btn').click().wait(2000)

      //search for and remove the team added
      cy.get('#HeaderSearch').clear().type('AaNew Team3', {delay: 10})
      cy.wait(2000)
      //cy.get('.Teams__table-body > :nth-child(2) > :nth-child(2)').click()
      cy.get('[class="Teams__remove-link ng-binding"]').first().click({force: true}).wait(500)
      cy.get('.swal2-confirm').click().wait(1000)
      cy.get('.toast-message').should('be.visible').should('contain', 'Team has been removed')
      cy.wait(1000)
      






    })
    
    it('Add a new staff', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()


      //Add staff
      cy.get('.subheader-splitted > :nth-child(1) > .hidden-xmd-max').click()
      //select role drop down- admin
      cy.get(':nth-child(2) > :nth-child(1) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      //select an item from the dropdown
      cy.contains('Administrator').click()
      //select add to team drop down
      cy.get(':nth-child(2) > :nth-child(2) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      //select an item from the drop down - Team Testers
      cy.contains('Team Testers').scrollIntoView({ easing: 'linear' }).click({force: true})

      //Select clinic
      cy.get('.ng-isolate-scope > .field > :nth-child(1) > .ui-select-search')
      cy.contains('Antenatal').scrollIntoView({ easing: 'linear' }).click({force: true})

      //input first name
      cy.get('#first_name').click().type('Tester', {delay: 50})
      //input surname
      cy.get('#last_name').click().type('Tested', {delay: 50})
      //input phone number
      cy.get('.TelInput__field').click().type('+2348127738596', {delay: 100})
      //input email
      cy.get('#email').click().type('QA@heliumhealth.com', {delay: 50})
      //input job title
      cy.get('#job_title').click().type('Medical Doctor', {delay: 50})
      //input department
      cy.get('#department').click().type('Cardiology', {delay: 50})
      cy.wait(1000)
      //select speciality dropdown
      cy.get(':nth-child(8) > :nth-child(1) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true}).wait(1000)
      cy.get('#ui-select-choices-row-4-2 > .ui-select-choices-row-inner').click()
      //select sex dropdown
      cy.get(':nth-child(8) > :nth-child(2) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('#ui-select-choices-row-5-1 > .ui-select-choices-row-inner').click()
      //select licenced medical doctor radio - yes
      //cy.get('.StaffNew__form-controls > :nth-child(1) > .StaffNew__form-radio-label').click()
      //input MDCN number
      //cy.get('#mcds_number').click().type('1021/22', {delay: 10})

      //Add institution locations
      cy.get('#locations').click({force: true})
      cy.get('#ui-select-choices-row-7-1 > .ui-select-choices-row-inner > .ng-binding').click()
      
      //Add store access
      cy.get('#permitted_stores').click({force: true})
      cy.get('#ui-select-choices-row-8-0 > .ui-select-choices-row-inner > .ng-binding').click()
      cy.wait(1000)
      //Add pharmacy access
      cy.get('#permitted_pharmacies').click({force: true})
      cy.get('#ui-select-choices-row-9-0 > .ui-select-choices-row-inner > .ng-binding').click()

   

      //upload photo
      cy.get('#upload_avatar').selectFile('upload.jpeg')
      //cy.get('input[type=file]').selectFile('file.json')

      //cy.pause()
      //click on save changes
      cy.get('.submit-btn').click().wait(2000)

    })






    it('Search Staff List', function()
    {
      cy.logins()

      //Settings Module Tabs-Staff
      cy.wait(2000).get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()

      cy.get('#HeaderSearch').click().type('Tester Tested', {delay: 10}).wait(2000)

    })







    it('Edit Staff', function()
    {
      cy.logins()

      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()

      //Search for Tetster Tested
      cy.get('#HeaderSearch').click().type('Tester Tested', {delay: 10}).wait(1000)
      cy.get('[class="icon-pencil"]').first().click({force: true}).wait(500)

      //edit to female
      cy.get(':nth-child(2) > .DropDown > .el-select > .el-input > .el-input__inner').click()
      cy.get('.el-zoom-in-top-enter-active > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click()
      //cy.get('[class="el-select-dropdown__item"]').last().click()

      //Select yes for pharmacy inventory
      cy.get(':nth-child(7) > :nth-child(4) > .Permissions__radio-container > :nth-child(2) > :nth-child(2) > .RadioButton__label').click()
      //Select no for store full requisition
      cy.get(':nth-child(7) > :nth-child(11) > .Permissions__radio-container > :nth-child(2) > :nth-child(1) > .RadioButton__label').click()
      
      //Submit
      cy.get('.submit-btn').click().wait(1000)

    })






    it('Reset Password', function()
    {
      cy.logins()

      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()
      //Search for the staff
      cy.get('#HeaderSearch').click().type('Tester Tested', {delay: 10}).wait(1000)
      //Click on reset password
      cy.get('[class="Staff__reset-password-button no-icon ng-scope"]').first().click({force: true}).wait(500)
      //Confirm reset
      cy.get('.submit-btn').click().wait(2000)

      //Confirm that the email was sent from the copy displayed
      cy.get('.NewPasswordModal__content > :nth-child(1)').should('be.visible').should('contain', 'The password reset was successful and an email/SMS has been sent to the staff.')
      //Close the modal
      cy.get('.modal-close').click().wait(1000)

    })









    it('Deactivate a staff', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()


      cy.get('#HeaderSearch').click().type('Tester Tested', {delay: 10}).wait(500)
      cy.get('[class="no-icon Staff__remove-link"]').first().click({force: true}).wait(500)
      cy.get('#item_name').click().type('Testing Deactivation', {delay: 10}).wait(500)
      cy.get('.remove-btn').click().wait(1000)    
    })






    it('View Inactive Staff', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()
      //Click on Not active tab and wait for a few secs
      cy.get('.Appointments__view-tab').click().wait(2000)
      //Confirm that the new created and deactivated staff is listed
      //cy.get('.Staff__main-container').should('be.visible').should('contain', 'Tester Tested')
      
      
    })







    it('Reactivate A Staff', function()
    {
      cy.logins()


      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()


      cy.get('.Appointments__view-tab').click().wait(1000)
      cy.get('#HeaderSearch').click().type('Tester Tested', {delay: 10}).wait(1000)
      cy.get('[class="no-icon Staff__edit-link"]').first().click({force: true}).wait(2000)
      cy.get('[class="btn btn-default ng-binding"]').click({force: true}).wait(2000)
      cy.get('.hidden-xs-max > :nth-child(3)').should('be.visible').should('contain', 'Tester')
      cy.wait(2000)
      
    })





    it('Activity Logs', function()
    {
      cy.logins()

      //Settings Module Tabs-Staff
      cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      cy.get('[ng-href="staff"] > .NavSidebar__menu-option-label').click()

      //view activity log
      cy.get('.header-splitted > div.header-splitted-col > .header-nav-tabs > [ui-sref="staff-activity-log"]').click().wait(500)
      //scroll the activity log page
      cy.get('.StaffActivityLog__activity-list').wait(500).scrollTo('0, 500', {ensureScrollable: false}, { duration: 2000 })


      //filter activity logs by date - today
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Today"]').click().wait(500)
      //filter activity logs by date - yesterday
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Yesterday"]').click().wait(500)
      //filter activity logs by date - This Week
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="This Week"]').click().wait(500)
      //filter activity logs by date - Last Week
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Last Week"]').click().wait(500)
      //filter activity logs by date - This Month
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="This Month"]').click().wait(500)
      //filter activity logs by date - Last Month
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Last Month"]').click().wait(500)
      //filter activity logs by date - This Year
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="This Year"]').click().wait(500)
      //filter activity logs by date - Last Year
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Last Year"]').click().wait(500)
      //filter activity logs by date - Custom Range
      cy.get(':nth-child(3) > header-date-range-picker.ng-isolate-scope > .HeaderDateRangePicker > .HeaderDateRangePicker__dropdown-container').click()
      cy.get('[style="display: block; top: 143px; left: auto; right: 59px;"] > .ranges > ul > [data-range-key="Custom Range"]').click().wait(500)
      cy.get(':nth-child(3) > .weekend.in-range').first().click()
      cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(3) > [data-title="r2c6"]').first().click().wait(1000)

    })







    it('Toggle Alert users when online -Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on the off button
       cy.get('[name="Alert users when offline"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true}).wait(2000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })






    it('Toggle Alert users when online -On', function()
    {
         cy.logins()

         //Settings Module Tabs-Features
         cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
         cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

         //Toggle feature on/off-Alert users when online
         cy.get('[name="Alert users when offline"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(1000)

         //Confirm toast message says the settings have been updated
         cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })







    it('Edit MRN prefix', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Edit Medical record number prefix
       cy.get('[name="Your medical record numbers prefix"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').scrollIntoView({force: true}).should('be.visible').click({force: true})
       cy.get('.field').scrollIntoView({force: true}).should('be.visible').click().clear().type('GTH/TEST/', {delay: 10}).scrollIntoView({force: true}).should('be.visible').wait(2000)
       cy.get('[name="Your medical record numbers prefix"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').scrollIntoView({force: true}).should('be.visible').click({force: true})
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })







    it('Edit Inactivity Timer', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Edit Inactivity timer
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').wait(500).click({force: true})
       cy.get('.field').click().clear().type('35', {delay: 10}).wait(2000)
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').click({force: true})
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    
      })








    it('Download all patient data', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Download All Patients Biodata
       cy.get('[name="Download all patient data"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').click()

    })









    it('Toggle Insurance Providers - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature off-Isurance Providers
       cy.get('[name="Insurance providers"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('[name="Insurance providers"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true})
       cy.get('.submit-btn').click().wait(1000)
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })








    it('Toggle Isurance Providers - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature on-Isurance Providers
       //cy.wait(1000).get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click({force: true})
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Insurance providers"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(1000)
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
      
   })







    it('Toggle Appointments - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature off-Appointments
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Appointments"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('[name="Appointments"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true}).wait(500)
       //cy.get('[name="Appointments"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('.submit-btn').click().wait(2000)
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })







    it('Toggle Appointments - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature On-Appointments
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Appointments"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(2000)
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })









    it('Toggle Clinics for the Appointments - Off', function()
    {
       cy.logins()
       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature off-Clinics for the appointments
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Clinics"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true}).wait(2000)
       //cy.get('[name="Clinics for the appointments"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
     
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })










    it('Toggle Clinics for the Appointments - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature on-Clinics for the appointments
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Clinics"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(2000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })











    it('Toggle Pharmacy & inventory - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature off-Pharmacy & inventory
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Pharmacy & inventory"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('[name="Pharmacy & inventory"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true})
       //cy.get('[name="Pharmacy & inventory"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('.submit-btn').click().wait(2000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })









    it('Toggle Pharmacy & inventory - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature on-Pharmacy & inventory
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Pharmacy & inventory"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(2000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })












    it('Toggle Mandatory check-in - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
            
       //Toggle feature on-Mandatory check-in
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Mandatory check-in"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true}).wait(1000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })











    it('Toggle Mandatory check-in - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       //Toggle feature Off-Mandatory check-in
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click({force: true})
       cy.get('[name="Mandatory check-in"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true})
       cy.get('[name="Mandatory check-in"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--on').click({force: true})
       cy.get('[name="Mandatory check-in"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off').click({force: true}).wait(1000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })












    it('Toggle Wards(in-patients) Off while patients are still admitted', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Wards (in-patients)"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--off').click().wait(1000)
       //cy.get('not done').click()

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', "Ward can't be turned off until all admitted patients to rooms are discharged")
    
    })










    it('Toggle Wards(in-patients) On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Wards (in-patients)"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--on').click().wait(1000)
       //cy.get('not done').click()

       //Confirm toast message says the settings have been updated
       //cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })













    it('Add New Ward', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click()
       cy.get(':nth-child(3) > .header-link').click()

       //Enter the ward name
       cy.get('#room_name').click().type('Tester Ward', {delay: 10})
       //Set number of bed in the ward/room
       cy.get('#room_no_of_beds').click().type('10', {delay: 10})
       //Click submit and wait 2secs
       cy.get('.submit-btn').click().wait(2000)


       //Confirm the ward was created and is in the list
       cy.get('.Ward__content').should('be.visible').should('contain', "Tester Ward")
    



    })













    it('Edit Ward', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click()
       cy.get('[ng-click="vm.editRoom(room)"]').first().click({force: true})
       cy.get('#room_name').click().clear().type('Tester Edited Room', {delay: 10})
       cy.get('.submit-btn').click().wait(2000)

       //Confirm the ward was created and is in the list
       cy.get('.Ward__content').should('be.visible').should('contain', "Tester Edited Room")
    


    })













    it('Show patients admitted in a ward', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on the first room and confirm there are open beds
       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click().wait(2000)
       cy.get('[ui-sref="ward-detail({id:room.id})"]').last().click({force: true}).wait(2000)

       //Confirm open beds (as a way to confirm ward was opened)
       cy.get(':nth-child(9) > .ward-empty-bed-label').should('be.visible').should('contain', "Open")

    })














    it('Open A patient file', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on the ward and open to display the patients
       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click()
       cy.get('[ui-sref="ward-detail({id:room.id})"]').last().click({force: true}).wait(2000)
       //Open the patient file
       cy.get('[ng-click="vm.openFile(bed.attributes.patient)"]').first().click({force: true}).wait(1000)

       //Confirm the patient file is opened and their mrn is displayed
       cy.get('.PatientFile__header').should('be.visible').should('contain', "Patient MRN")


    })



















    it('Discharge patient directly', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click()
       cy.get('[ui-sref="ward-detail({id:room.id})"]').last().click({force: true}).wait(1000)
       cy.get('[ng-click="vm.dischargePatient(bed)"]').first().click({force: true}).wait(1000)
       cy.get('.remove-btn').click().wait(1000)

    })


















    it('Delete empty ward', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('.Features__FeaturesItem__link > .ng-binding').last().click()
       cy.get('[ng-click="vm.deleteRoom(room)"]').first().click({force: true}).wait(500)
       cy.get('.remove-btn').click().wait(1000)


    })



















    it('Toggle AUto-billing investigations - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--off').click()
       cy.get('.submit-btn').click().wait(2000)

      //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
       

    })



















    it('Toggle Auto-billing investigations - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--on').click().wait(2000)  
      
       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })

















    it('Add Investigation', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Add the investigation to the list
       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
       cy.get('.AutoBillingInvestigations__toggle-add-new').click()
       cy.get('.LabTestsMultiselectInfinite__search').click().click().clear().type('Malaria', {delay: 10}).wait(2000)
       cy.get('[ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
       cy.get('.AutoBillingInvestigations__add-new-submit').click().wait(2000)

       //Confirm the item was added to the list
       cy.get('.AutoBillingInvestigations__content').should('be.visible').should('contain', 'Malaria Parasite')
    

      
    })


















    it('Link Investigation', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
       cy.get(':nth-child(1) > :nth-child(2) > .AutoBillingInvestigations__selects-group > .AutoBillingInvestigations__select > [data-cy=BillingItemsSelectWithCategories__container] > .BillingItemsSelectWithCategories__select > .BillingItemsSelectWithCategories__button > .BillingItemsSelectWithCategories__caret').click({force: true})
       cy.get(':nth-child(1) > :nth-child(2) > .AutoBillingInvestigations__selects-group > .AutoBillingInvestigations__select > [data-cy=BillingItemsSelectWithCategories__container] > .BillingItemsSelectWithCategories__select > .BillingItemsSelectWithCategories__search').click().type('Malaria Blood Slide',{force: true}, {delay: 10}).wait(2000)
       cy.get('[style=""] > .BillingItemsSelectWithCategories__option-row').click().wait(1000)


       //Confirm toast message says the items have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Malaria Blood Slide-Unity successfully linked to Malaria Parasite')
    
    })

















    it('Delink Investigation', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
       cy.get('#HeaderSearch').click().type('Malaria',{force: true}, {delay: 10})
       cy.get(':nth-child(1) > .AutoBillingInvestigations__item-actions > .AutoBillingInvestigations__delink-btn').first().click()
       cy.get('.remove-btn').click().wait(1000)

       //Confirm toast message says the items have been updated
       //cy.get('.toast-message').should('be.visible').should('contain', "Malaria Parasite successfully delinked")
    
    })















    it('Delete Investigation from auto-billing', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Auto-billing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
       cy.get('#HeaderSearch').click().type('Malaria Parasite',{force: true}, {delay: 10}).wait(2000)
       cy.get('.AutoBillingInvestigations__delete-btn').first().click()
       cy.get('.remove-btn').click().wait(1000)

    })


















    it('Toggle Managing Investigations - Off', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Managing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--off').click()
       cy.get('.submit-btn').click().wait(2000)

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    

    })
















    it('Toggle Managing Investigations - On', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Managing investigations"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-isolate-scope > .OnOff > .OnOff__button--on').click()

       //Confirm toast message says the settings have been updated
       cy.get('.toast-message').should('be.visible').should('contain', 'Your settings have been updated')
    
    })




















    it('Add Bank Details', function()
    {
      //  cy.logins()

      //  //Settings Module Tabs-Profile
      //  cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      //  cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      // //Navigate to the features page and click on configure bank details and POS machines
      //  cy.get('[name="Managing bank details and POS devices"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
      //  cy.get(':nth-child(1) > .PaymentsManagement__content-label-new').click().wait(1000)
      //  cy.get('.btn btn-default form-control ui-select-toggle[tabindex="-1"]').last().scrollIntoView().click()
      //  cy.get('[class="ui-select-choices-row-inner"]').last().click()
      //  cy.contains('ENTER ACCOUNT NUMBER').click().type('0128589850')
      //  //cy.get('[ng-class="{'PaymentsManagement__content-row-save--disabled':vm.isBankSaveDisabled(account)}"]').click()
      //  cy.get('.PaymentsManagement__content-row-save').last()
   
   })



















    it('Edit Bank Details', function()
    {
      // cy.logins()
      //  //Settings Module Tabs-Profile
      //  cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
      //  cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

      //  cy.get('[name="Managing bank details and POS devices"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
      //  //cy.get('[class="caret pull-right"]').click()
      //  //cy.get('[class="ui-select-choices-row-inner"]').last().click()
      //  cy.get(':nth-child(2) > [style=""] > .PaymentsManagement__content-row-number > .field').click().type('4000585856')
      //  cy.get('[class="PaymentsManagement__content-row-save ng-binding"]').first().click()

    })
















    it('Add new store', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on configure pharamacy and store in the features page
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click().wait(2000)
      //Click on the add store button
       cy.get('.StoresManagement__label-new').click().wait(1000)


               //Function for random store
               // Generate a random store with numbers
               const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
               const store = 'Tester Store' + randomNumber;


       //Enter the name of the store and save
       cy.get(':nth-child(6) > .StoresManagement__input').click().clear().type(store)

       //Click on save
       cy.get(':nth-child(6) > .StoresManagement__save').click().wait(2000)
       //Confirm the store is created
       cy.get('.toast-message').should('contain', 'Updated successfully')
    




    })
















    it('Archive store', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on configure pharamacy and store in the features page
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click().wait(2000)
      //Click on the archive store button
      cy.get(':nth-child(6) > .StoresManagement__archive').click().wait(1000)
      //Confirm the store is archived
       cy.get('.toast-message').should('contain', 'Updated successfully')
    



    })
















    it('Add new pharmacy', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      
       //Click on configure pharamacy and store in the features page
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click().wait(2000)

       //Click on the add pharmacy button
       cy.get('.PharmaciesManagement__label-new').click().wait(1000)



               //Function for random store
               // Generate a random store with numbers
               const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
               const pharmacy = 'Tester Pharmacy' + randomNumber;


       //Enter the name of the store and save
       cy.get(':nth-child(9) > .PharmaciesManagement__input').click().clear().type(pharmacy)
       //Click on save
       cy.get(':nth-child(9) > .PharmaciesManagement__save').click().wait(2000)

       //Confirm the store is created
       cy.get('.toast-message').should('contain', 'Updated successfully')

    })












    




    it('Archive Pharmacy', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
      //Click on configure pharamacy and store in the features page
       cy.get('features-item.ng-scope > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click().wait(2000)
      //Click on the archive pharmacy button
      cy.get(':nth-child(9) > .PharmaciesManagement__archive').click().wait(1000)
      //Confirm the pharmacy is archived
      cy.get('.toast-message').should('contain', 'Updated successfully')
    



    })















    it('Add New Patient Tag', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Enter the patient tag page and click on add new tag
       cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude').click()
       cy.get('.subheader-splitted > :nth-child(1) > .header-link').click()
       //Enter the name and click on the show in queue then save
       cy.get('.field').click().type('Tester New Tag')
       cy.get('.ico-tick').click().wait(1000)
       cy.get('.submit-btn').click().wait(2000)

    })















    it('Search/Edit Patient Tag', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude').click()
       //Search for the newly created patient tag
       cy.get('#q').click().type('Tester New Tag')
       //Click on edit, enter the new name and click on save
       cy.get('[style=""] > .Tags__list__row__actions > [ng-click="vm.add(tag)"] > .icon-pencil').first().click()
       cy.get('.field').click().clear().type('Edited Tester New Tag')
       cy.get('.submit-btn').click().wait(2000)


    })















    it('Delete Patient Tag', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude').click()
       //Search for the edited patient tag
       cy.get('#q').click({force: true}).type('Edited Tester New Tag')
       //Click on the delete icon and confirm delete
       cy.get('[style=""] > .Tags__list__row__actions > [ng-click="vm.delete(tag)"] > .icon-trash').first().click()
       cy.get('.remove-btn').click().wait(2000)


    })















    it('Update Vitals Reference Values', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()

       cy.get('[name="Vitals reference values"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button').click().wait(500)
       cy.get('[ng-model="vm.values.oxygen_saturation.min"]').click().clear().type('80', {delay: 50}).wait(1000)
       cy.get(':nth-child(3) > .FeatureReferencesModal__row__inputs > .ng-pristine').click().clear().type('105', {delay: 50}).wait(1000)
       cy.get('.submit-btn').click().wait(2000)
    })
















    it('Manage Children age limit', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Click on the manage button on the children's age limit line
       cy.get('.ManageChildrenAgeLimitAction > .btn').click().wait(2000)

       //Clear the field and enter another value
       cy.get('.AlmightyInput__field').click().clear().type('26').wait(1000)
       cy.get('.submit-btn').click().wait(2000)
    })












    
    it('Manage Integrations', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Click on the manage button on the integrations line
       cy.get('.ManageIntegrationsAction > .btn').click().wait(1000)
       //Confirm the quickbooks integration is displayed with connect button
       cy.get('.QuickBooksIntegration__connect-btn').should('be.visible').should('contain', 'Connect')
    
       
    })












    

    
    it('Add Cost Centers', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Click on the manage button on the Cost Centers line
       cy.get('.ManageCostCentersAction > .btn').click().wait(2000)

       //Click on the add new cost centers
       cy.get('.header-link').click().wait(2000)

       //Enter the name of the cost center
       cy.get('.AlmightyInput__field').click().clear().type('Tester Cost Center')

       //Click on the submit
       cy.get('.submit-btn').click().wait(2000)

       //Confirm that the cost center is created
       cy.get('.ManageCostCentersList__content > :nth-child(2) > :nth-child(1)').should('be.visible').should('contain', 'Tester Cost Center')
    
       
    })












    

    

    
    it('Edit Cost Centers', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Click on the manage button on the Cost Centers line
       cy.get('.ManageCostCentersAction > .btn').click().wait(2000)

       //Click on the Edit cost centers
       cy.contains('.ManageCostCenterListItem__action-btn','Edit').click({force: true}).last().wait(2000)

       //Enter the new name of the cost center
       cy.get('.AlmightyInput__field').click().clear().type('Edited Tester Cost Center')

       //Click on the submit
       cy.get('.submit-btn').click().wait(2000)

       //Confirm that the cost center is created
       cy.get('.ManageCostCentersList__content > :nth-child(2) > :nth-child(1)').should('be.visible').should('contain', 'Edited Tester Cost Center')
    
       
    })




















    it('Link Categotries to Cost Centers', function()
    {
       cy.logins()

       //Settings Module Tabs-Profile
       cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
       cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
       //Click on the manage button on the Cost Centers line
       cy.get('.ManageCostCentersAction > .btn').click().wait(2000)

       //Click on the link categories
       cy.contains('.ManageCostCenterListItem__action-btn','Link Categories').click({force: true}).last().wait(2000)

       //Select the categories
       cy.get(':nth-child(1) > [data-cy="AlmightyCheckbox"] > .AlmightyCheckbox__selector').click().wait(1000)
       cy.get(':nth-child(2) > [data-cy="AlmightyCheckbox"] > .AlmightyCheckbox__selector').click().wait(1000)
       cy.get(':nth-child(4) > [data-cy="AlmightyCheckbox"] > .AlmightyCheckbox__selector').click().wait(1000)
       
       //Click on the submit
       cy.get('.submit-btn').click().wait(1000)

       
       
    })















    


   //  it('Deactivate Cost Centers', function()
   //  {
   //     cy.login()

   //     //Settings Module Tabs-Profile
   //     cy.get('[ng-if="::vm.settings.access"] > .NavSidebar__dropdown__button > .NavSidebar__dropdown__button__arrow-down').click()
   //     cy.get('[ng-href="features"] > .NavSidebar__menu-option-label').click()
   //     //Click on the manage button on the Cost Centers line
   //     cy.get('.ManageCostCentersAction > .btn').click().wait(2000)

   //     //Click on deactivate button
   //     cy.get('.icon-trash ManageCostCenterListItem__action-btn-icon').click({force: true}).last().wait(2000)

       
   //     //Click on the submit
   //     cy.get('.submit-btn').click().wait(1000)

       
       
   //  })


})