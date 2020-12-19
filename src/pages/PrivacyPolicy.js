import React from "react";
import { AccountPageWrapper } from "../components/styles";
import styled from "styled-components";

const StyledHeader = styled.h1`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  font-size: 1.5rem;
`;
const StyledTable = styled.table`
  width: 80%;
  margin: 0.5rem auto;
  border: 0.5px solid lightgrey;
  border-collapse: collapse;
  th {
    padding: .5rem;
    font-size: 1rem;
    color: #333;
  }

  caption {
    text-align: right;
    font-weight: bold;
    color: ${props => props.theme.colors.blue};
    padding: 0 0 0.5rem 0;
    font-size: 1rem;
  }
  #privacy-facts {
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    font-size: 1.3rem;
    padding: 1rem;
    text-transform: uppercase;
    margin: 0;
    width: 20%;
  }
  #privacy-title {
    color: ${props => props.theme.colors.blue};
    font-size: 1.2rem;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  #table-two-body {
    td {
      padding: 1rem;
      color: grey;
      border: 1px solid lightgrey;
      ul {
        margin: 0.5rem 0 0.5rem 2rem;
        li {
          margin: 0.2rem 0;
        }
      }
    }
    th {
      text-transform: capitalize;
      font-size: 1.2rem;
      border: 1px solid white;
      background: #74747b;
      color: ${props => props.theme.colors.white};
      width: 20%;
    }
  }
  #table-three-head {
    background: #74747b;
    th {
      padding: 1rem 0;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.white};
      text-transform: capitalize;
      border: 1px solid white;
    }
    #table-three-title {
      font-size: 1.3rem;
    }
  }
  #table-three-body {
    td {
      border: 1px solid grey;
      :nth-child(2) {
        text-align: center;
        font-size: 1rem;
        padding: 1rem;
        color: grey;
        text-transform: capitalize;
      }
      :nth-child(3) {
        font-size: 1rem;
        text-align: center;
        padding: 1rem;
        color: grey;
        text-transform: capitalize;
      }
    }
    h6 {
      font-size: 1rem;
      padding: 0.5rem 0 0 0.5rem;
    }
    p {
      padding: 0.5rem;
      color: grey;
    }
  }
  #table-four-body {
    td {
      padding: 1rem;
      color: grey;
      border: 1px solid lightgrey;
      font-size: 1rem;
    }
    th {
      text-transform: capitalize;
      font-size: 1.3rem;
      border: 1px solid white;
      padding: 1rem;
      background: #74747b;
      color: ${props => props.theme.colors.white};
    }
  }
  #table-five-body {
    th {
      padding: 1rem;
      text-align: left;
    }
    td {
      padding: 1rem;
      color: grey;
      border: 1px solid lightgrey;
      font-size: 1rem;
    }
  }
  #table-six-body {
    th {
      font-size: 1rem;
      text-align: left;
      border: .5px solid lightgrey;
      color: ${props => props.theme.colors.black};
    }
    td {
      padding: 1rem;
      border: .5px solid lightgrey;
      color: grey;
      ul {
        margin: 0.5rem 0 0.5rem 2rem;
        li {
          margin: 0.2rem 0;
        }
      }
    }
  }
  #centered-grey {
    th {
      color: ${props => props.theme.colors.white};
    }
    background: #74747b;
    color: ${props => props.theme.colors.white};
  }
  #table-seven-body {
    th {
      width: 30%;
      padding: .5rem;
      text-align: left;
    }
    td {
      padding: .5rem;
      color: grey;
    }
  }
`;

export default function PrivacyPolicy() {
  return (
    <AccountPageWrapper>
      <StyledHeader>Privacy Policy</StyledHeader>
      <StyledTable>
        <caption>Rev. Date 12/2010</caption>
        <thead>
          <tr>
            <th id='privacy-facts'>facts</th>
            <th id='privacy-title'>
              What does america's community bank do with your personal
              information?
            </th>
          </tr>
        </thead>
      </StyledTable>
      <StyledTable>
        <tbody id='table-two-body'>
          <tr>
            <th>why?</th>
            <td>
              <p>
                Financial companies choose how they share your personal
                information. Federal law gives consumers the right to limit some
                but not all sharing. Federal law also requires us to tell you
                how we collect, share, and protect your personal information.
                Please read this notice carefully to understand what we do.
              </p>
            </td>
          </tr>
          <tr>
            <th>what?</th>
            <td>
              <p>
                The types of personal information we collect and share depend on
                the product or service you have with us. This information can
                include:
              </p>
              <ul>
                <li>Social Security number and transaction history</li>
                <li>Account balances and payment history</li>
                <li>Credit history and credit scores</li>
              </ul>
              <p>
                When you are no longer our customer, we continue to share your
                information as described in this notice.
              </p>
            </td>
          </tr>
          <tr>
            <th>how?</th>
            <td>
              <p>
                	All financial companies need to share customers’ personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers’ personal information; the reasons America's Community Bank chooses to share; and whether you can limit this sharing.
              </p>

            </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead id='table-three-head'>
          <tr>
            <th id='table-three-title'>
              Reasons we can share your personal information
            </th>
            <th>does america's community bank share?</th>
            <th>can you limit this sharing?</th>
          </tr>
        </thead>
        <tbody id='table-three-body'>
          <tr>
            <td>
              <h6>For our everyday business purposes -</h6>
              <p>
                such as to process your transactions, maintain your account(s),
                respond to court orders and legal investigations, or report to
                credit bureaus
              </p>
            </td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>
              <h6>For our marketing purposes -</h6>
              <p>to offer our products and services to you</p>
            </td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>
              <h6>For joint marketing with other financial companies</h6>
            </td>
            <td>no</td>
            <td>We don't share</td>
          </tr>
          <tr>
            <td>
              <h6>For our affiliates’ everyday business purposes –</h6>
              <p>information about your transactions and experiences</p>
            </td>
            <td>no</td>
            <td>We don't share</td>
          </tr>
          <tr>
            <td>
              <h6>For our affiliates’ everyday business purposes –</h6>
              <p>information about your transactions and experiences</p>
            </td>
            <td>no</td>
            <td>We don't share</td>
          </tr>
          <tr>
            <td>
              <h6>For our affiliates to market to you</h6>
              <p>information about your credithreerthiness</p>
            </td>
            <td>no</td>
            <td>We don't share</td>
          </tr>
          <tr>
            <td>
              <h6>For our affiliates to market to you</h6>
              <p>information about your transactions and experiences</p>
            </td>
            <td>no</td>
            <td>We don't share</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <tbody id='table-four-body'>
          <tr>
            <th>Questions?</th>
            <td>
              <p>
                Call us at 816-228-2300 or visit us online at:{" "}
                <a href='/'>www.amcommbank.com</a>
              </p>
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead id="centered-grey">
          <tr>
            <th colspan="2">Who We Are</th>
          </tr>

        </thead>
        <tbody id='table-five-body'>
          <tr>
            <th>Who is providing this notice?</th>
            <td>
                America's Community Bank
                </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead id="centered-grey">
          <tr>
            <th colspan="2">What We Do</th>
          </tr>
        </thead>
        <tbody id="table-six-body">
          <tr>
            <th>How does America's Community Bank protect my personal information?</th>
            <td>To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings.</td>
          </tr>
          <tr>
            <th>How does America's Community Bank collect my personal information?</th>
            <td>
            <p>We collect your personal information, for example, when you:
              <ul>
                <li>Open an account</li>
                <li>Pay your bill or give us your contact information</li>
                <li>Provide account information or give us your contact information</li>
              </ul>
              We also collect your personal information from others, such as credit bureaus, affiliates, or other companies.
            </p>
            </td>
          </tr>
          <tr>
            <th>Why can't I limit all sharing?</th>
            <td>
              <p>Federal law gives you the right to limit only:
                <ul>
                  <li>Sharing for affiliates’ everyday business purposes—information about your creditworthiness</li>
                  <li>Affiliates from using your information to market to you</li>
                  <li>Sharing for non-affiliates' companies to market to you</li>
                </ul>
                See below for more on your rights under state law.
              </p>
            </td>
          </tr>
          <tr>
            <th>What happens when I limit sharing for an account I hold jointly with someone else? </th>
            <td>Your choices will apply to everyone on your account.</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead id="centered-grey">
        <tr>
          <th colspan="2">Definitions</th>
        </tr>
        </thead>
        <tbody id="table-seven-body">
          <tr>
            <th>Affiliates</th>
            <td>Companies related by common ownership or control. They can be financial and non-financial companies. America's Community Bank does not share with affiliates.</td>
          </tr>
          <tr>
            <th>Non-Affiliates</th>
            <td>Companies not related by common ownership or control. They can be financial and non-financial companies. America's Community Bank does not share with non-affiliates.</td>
          </tr>
          <tr>
            <th>Joint Marketing
            </th>
            <td>A formal agreement between non-affiliated financial companies that together market financial products or services to you. America's Community Bank does not jointly market.</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead id="centered-grey">
          <tr>
            <th>Other Important Information</th>
          </tr>
        </thead>
        <tbody id="table-seven-body">
          <tr>
            <td>We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted by law. If you decide to close your account(s) or become an inactive customer, we will adhere to the privacy policies and practices as described on this notice. America’s Community Bank restricts access to nonpublic personal information about you only to bank employees who need to know that information to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with federal standards to guard your nonpublic personal information.</td>
          </tr>
        </tbody>
      </StyledTable>
    </AccountPageWrapper>
  );
}
