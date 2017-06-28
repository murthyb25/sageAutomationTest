@all
Feature: Login and creating a current account in Banking site

  Background: 
    Given I navigate to url
    When I login with valid credentials
    And I successfully logged in
    And I click on Banking tab from the Global header
    And I  should see Add a new account option
    And I click on Add a new account option

  @Tag1
  Scenario Outline: POSITIVE TEST CASE by clicking on Save& connect bank
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    And enter "<account number>" in the account number filed
    And click on Save& Connect Bank button
    Then I should see account created "<account name>"

    Examples: 
      | account type | account name | sort code | account number |
      | current      | Tag1         |    110011 |       11346455 |

  @Tag2
  Scenario Outline: POSITIVE TEST CASE by clicking on Save button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    And enter "<account number>" in the account number filed
    And click on Save button
    Then I should see account created "<account name>"

    Examples: 
      | account type | account name | sort code | account number |
      | current      | Tag2         |    220011 |       22000000 |

  @Tag3
  Scenario Outline: POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    Then click on Save button

    Examples: 
      | account type | account name |
      | current      | Tag3         |

  @Tag4
  Scenario Outline: POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<account number>" in the account number filed
    Then click on Save button

    Examples: 
      | account type | account name | account number |
      | current      | tag4         |     4456258556 |

  @Tag5
  Scenario Outline: POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    Then click on Save button

    Examples: 
      | account type | account name | sort code   |
      | current      | tag5         | 55555555555 |

  @Tag6
  Scenario Outline: POSITIVE TEST CASE by clicking on Save
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    And enter "<account number>" in the account number filed
    And click on Save button
    Then I should see account created "<account name>"

    Examples: 
      | account type | account name | sort code | account number |
      | current      | Tag6         |    666666 |    63645445747 |

  @Tag7
  Scenario Outline: POSITIVE TEST CASE by clicking on Save and connect bank button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    And enter "<account number>" in the account number filed
    And click on Save button
    Then I should see account created "<account name>"

    Examples: 
      | account type | account name | sort code | account number |
      | current      | Tag7         |    770011 |      770075800 |

  @Tag8
  Scenario Outline: POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save and connect bank button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    Then click on Save button

    Examples: 
      | account type | account name |
      | current      | Tag8         |

  @Tag9
  Scenario Outline: POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save and connect bank button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<account number>" in the account number filed
    Then click on Save button

    Examples: 
      | account type | account name | account number |
      | current      | tag9         |      999258556 |

  @Tag10
  Scenario Outline: POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save and connect bank button
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    Then click on Save button

    Examples: 
      | account type | account name | sort code   |
      | current      | tag10        | 10111111100 |

  @Tag11
  Scenario Outline: Negative Test case by giving blank values while creating new current account
    Then I select "<account type>" from the account type drop down
    And enter "<account name>" in the account name input field
    And enter "<sort code>" in the sort code input field
    And enter "<account number>" in the account number filed
    And click on Save& Connect Bank button
    Then I should see error message

    Examples: 
      | account type | account name | sort code | account number |
      | current      |              |           |                |

  @Tag12
  Scenario Outline: Negative Test case by giving over the limit of actual digits in acc number field
    Then I select "<account type>" from the account type drop down
    And enter "<account number>" in the account number input field
    And click on Save& Connect Bank button
    Then I should see error message
    Examples: 
      | account type | account number |
      |current|3333333333333333344445845|
