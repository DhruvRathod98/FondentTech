# TakeHomeTest Project

This project implements a complete **QA Automation Engineer – Home Assignment** with **login**, **Creation of Profile**, **Creation of Notes**, **Creation of Tasks** and **Logout** features. It also includes **Cypress tests** for quality assurance and a **Defect Log** for tracking identified issues.

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Testing with Cypress](#testing-with-cypress)
- [Defect Log](#defect-log)
- [Project Structure](#project-structure)

---

## Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** (comes bundled with Node.js)

---

## Installation

1. Navigate to the project directory:
   ```bash
   cd TakeHomeTest

## Installing dependencies 

1. npm install

## Installing and running cypress

1. npm install cypress --save-dev
2. npx cypress open


## Defect Log

The Defect Log can be found in the project directory:
 **Defect Log.xlsx**

It contains details about any issues encountered, including:

1. Defect ID: A unique identifier.
2. Severity: Low, Medium, or High.
3. Description: A brief summary of the defect.
4. Steps to Reproduce: Instructions for reproducing the defect.
5. Expected Result 
6. Actual Result 
7. Environment : Deatils of the Browser, OS, Environment and User  
6. Status: Open, In Progress, or Closed.


## Project Structure 

TakeHomeTest/
│
├── cypress/            # Cypress tests and configurations
├── node_modules/       # Dependencies installed via npm
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact versions of installed dependencies
├── webpack.config.js   # Webpack configuration for bundling
├── cypress.config.js   # Configuration for Cypress tests
├── cypress.env.json    # Environment variables for Cypress tests
└── Defect Log.xlsx     # Defect tracking log

