import React from "react";
import { AccountPageWrapper } from "../components/styles";
import styled from "styled-components";

const StyledHeader = styled.h1`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
`;
const StyledTable = styled.table`
  width: 80%;
  margin: 0.5rem auto;
  border: 0.5px solid lightgrey;
  border-collapse: collapse;
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
      font-size: 1.3rem;
      border: 1px solid white;
      padding: 1rem;
      background: #74747b;
      color: ${props => props.theme.colors.white};
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
  #table-five-head {

      th {
        background: rgb(116, 116, 123);
        color: white;
        text-align: right;
        padding: 1rem 0;
        width: 60%;
        font-size: 1.2rem;

      }
    }
  }
  #table-five-body {

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
      <StyledTable className='table-two'>
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
        <thead id='table-five-head'>
          <th>Who we are</th>
          <th></th>
        </thead>
        <tbody id='table-five-body'>
          <tr>
            <th>Who is providing this notice?</th>
            <td>America's Community Bank</td>
          </tr>
        </tbody>
      </StyledTable>
    </AccountPageWrapper>
  );
}
