import * as Yup from "yup";

export const agreementSchema = Yup.object().shape({
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions.")
    .required(),
});

export const agreement = `
Fake Agreement

This "Fake Agreement" (the "Agreement") is entered into between the Parties:

Party A:
Name: [Party A Name]
Address: [Party A Address]
Email: [Party A Email]

Party B:
Name: [Party B Name]
Address: [Party B Address]
Email: [Party B Email]

1. Agreement Purpose
   The purpose of this Agreement is to establish the terms and conditions under which Party A and Party B will engage in a mock collaboration.

2. Term
   This Agreement shall commence on the effective date of signing and shall remain in effect for a period of [Agreement Term] months.

3. Responsibilities
   3.1 Party A agrees to:
       - Provide [Party A Products/Services] as specified in Exhibit A.
       - Cooperate with Party B in all matters related to the mock collaboration.

   3.2 Party B agrees to:
       - Provide feedback on the [Party A Products/Services] provided by Party A.
       - Participate in mock promotional activities as required.

4. Compensation
   This is a non-monetary agreement, and no compensation shall be provided to either party.

5. Confidentiality
   Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of this mock collaboration.

6. Termination
   Either party may terminate this Agreement with a written notice of [Termination Notice Period] days. Upon termination, both parties agree to return any materials or information received from the other party.

7. Governing Law
   This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].

IN WITNESS WHEREOF, the Parties have executed this "Fake Agreement" as of the date first written above.

Party A:                       Party B:
/s/ [Murad Sadigov]             /s/ [Murad Sadigov]
-----------------------------------------
[Murad Sadigov]                 [Murad Sadigov]

`;
