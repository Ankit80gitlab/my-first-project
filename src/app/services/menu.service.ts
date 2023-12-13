import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, forkJoin } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import {Menu} from '../models/Menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu=[
    {href:"/cctns/dashboard",label:"Home"},
    {href:"/cctns/gdmain",label:"General Diary",children:[
      {href:"/cctns/gdmain/add",label:"General Diary Add"},
      {href:"/cctns/gdmain/view",label:"General Search and View"},
      ]},
    {href:"cctns/complaint",label:"Complaint",children:[
        {href:"",label:"Add New Complaint"},
        {href:"",label:"View Complaint Registration"},
        {href:"",label:"Complaint Add & Remove"},
        {href:"",label:"Complaint Transfer"},
        {href:"",label:"Assign Investigation for Complaint"},
        {href:"",label:"Submission of Complaint Investigation Report"},
        {href:"",label:"Approving / Rejecting Complaint Investigation Report"},
    ]},
    {href:"",label:"Citizen Services",children:[
      {href:"",label:"Tenant / PG Verification Request",children:[
        {href:"",label:"Add Tenant / PG Verification Detail"},
        {href:"",label:"Appoint The Inquiry Officer by The Police Station"},
        {href:"",label:"Submission of Inquiry Report by Inquiry Officer"},
        {href:"",label:"Recommendation by SHO of Police Station (Permanent/Previous Address)"},
        {href:"",label:"Recommendation by the SHO of the Police Station (Present Address)"},
        {href:"",label:"Tenant Verification Detail View"}
    ]},
      {href:"",label:"Domestic Help Verification ",children:[
        {href:"",label:"Add domestic help verification request"},
        {href:"",label:"Assign/Reassign Inquiry Officer"},
        {href:"",label:"Submission of Inquiry Report"},
        {href:"",label:"Recommendation by Thanedar (Permanent Address)"},
        {href:"",label:"Recommendation by the SHO of the Police Station (Present Address)"},
        {href:"",label:"View and Search Application Status"}
    ]},
      {href:"",label:"Employee Verification",children:[
        {href:"",label:"Add Employee Verification Request"},
        {href:"",label:"Assign/Reassign Inquiry Officer"},
        {href:"",label:"Submission of Inquiry Report"},
        {href:"",label:"Review/specify recommendation by officer"},
        {href:"",label:"Review/recommendation by the SP of the present address"},
        {href:"",label:"Employee Verification Request Details Search and View"}
    ]},
      {href:"",label:"Passport Verification",children:[
        {href:"",label:"Add Passport Verification Request"},
        {href:"",label:"Designated/Redesignated Officer for Inquiry"},
        {href:"",label:"Submission of Inquiry Report by Inquiry Officer"},
        {href:"",label:"Review / Recommendation by Designated Officer"},
        {href:"",label:"Recommended by NSP"},
        {href:"",label:"Passport Verification Detail View"}
    ]},
      {href:"",label:"Character Certificate Request",children:[
        {href:"",label:"Add Character Certificate Request "},
        {href:"",label:"Assigned / Reassigned Inquiry Officer"},
        {href:"",label:"Submission of Inquiry Report"},
        {href:"",label:"Recommendation by Police Station"},
        {href:"",label:"Review / Recommendation by SP"},
    ]},
      {href:"",label:"Verification of Private Security Agency",children:[
        {href:"",label:"Add Private Security Agency Verification Request "},
        {href:"",label:"Appointment of Inquiry Officer by Thanedar"},
        {href:"",label:"Submission of inquiry report by EO to SHO"},
        {href:"",label:"Review / Recommendation by DSP"},
        {href:"",label:"Review/Recommendation by SP (Permanent Address)"},
        {href:"",label:"Review/Recommendation by SP (Present Address)"},
        {href:"",label:"Applicant Verification Detail View"},
    ]},
      {href:"",label:"Arms License Request",children:[
        {href:"",label:"Add Weapon License Request "},
        {href:"",label:"Appointment/Re-appointment of Inquiry Officer"},
        {href:"",label:"Submission of Investigation Report by EO"},
        {href:"",label:"Review/recommendation by Thanedar"},
        {href:"",label:"Submission of investigation report by DSB/ACP office"},
        {href:"",label:"Recommendation by SP/DCP"},
        
    ]},
      {href:"",label:"Request / Event Display",children:[
        {href:"",label:"Event Display / Request Registration"},
        {href:"",label:"VIEW AND PRINT REQUEST FOR EVENT / PERFORMANCE PERMISSIONS"},
        {href:"",label:"Accept / Reject / Assign request / Event performance (SP or equivalent official)"},
        {href:"",label:"Submission of investigation report for request / event performance by Thanedar"},
        {href:"",label:"Submission of test reports for Event/Performance requests (by DySP/ACP)"},
        {href:"",label:"Accept / Reject test reports for permission to perform events / events"},
        
    ]},
      {href:"",label:"Request for protest/strike",children:[
        {href:"",label:"Protest/Strike Registration Request "},
        {href:"",label:"View and print request for permission to protest/strike"},
        {href:"",label:"Accept / Reject / Request Protest / Strike Designate by (SP / DCP)"},
        {href:"",label:"Request Inquiry Report / Submission of Protest / Strike (SHO)"},
        {href:"",label:"Submission of inquiry report by DySP/ACP office on permission to protest/strike"},
        {href:"",label:"Accept/Protest/Reject investigation report for permission to strike"},   
    ]},
      {href:"",label:"Request Procession",children:[
        {href:"",label:"Procession Request Registration"},
        {href:"",label:"View and Print The request for Permission to March"},
        {href:"",label:"Accept / Reject / Assign Procession Request (IGP / Joint CP / SP / DCP)"},
        {href:"",label:"Submission of Inquiry Report Procession Request (SHO)"},
        {href:"",label:"DySP/ACP Permission to Procession Report Submitted by Office"},
        {href:"",label:"Accept/Reject test report to allow procession"},
    ]},
      {href:"",label:"Linking/Delinking of Service Request",children:[
        {href:"",label:"Service Request Link/Disconnect "},
        {href:"",label:"Acceptance for Service Request Link/Unlink"},
    ]},
      {href:"",label:"View Citizen Suggestions"},
      {href:"",label:"Citizen Response",children:[
        {href:"",label:"View Citizen Feedback "},       
    ]},
      ]},
     

    {href:"",label:"Registration",children:[
        {href:"",label:"First Information Report (IIF-1)",children:[
        {href:"",label:"Registration of First Information Report"},
        {href:"",label:"Search FIR and view details"},
        {href:"",label:"FIR Transfer"},
        {href:"",label:"Re-registration of transferred FIR"},
        {href:"",label:"FIR Link/Copy"},
        {href:"",label:"Approval to add an FIR"},
        {href:"",label:"View Transfer Case Details"},
        {href:"",label:"Designated Fellow Investigating Officer"},
        {href:"",label:"Published FIR"},
        {href:"",label:"Social Justice Beneficiary Information"},
    ]},
    {href:"",label:"Non Cognizable Report (NCR)",children:[
      {href:"",label:"Registration of NCR"},
      {href:"",label:"Search NCR Details"},
      {href:"",label:"Designate Inquiry Officer for NCR"}]},
    {href:"",label:"Dead Animal / Carcass Registration",children:[
      {href:"",label:"Registration of Dead Animal / Carcass"},
      {href:"",label:"Find and view dead animals / carcasses"},
      {href:"",label:"Add Panchnama Details"},
      {href:"",label:"Preparation Autopsy Request"},
      {href:"",label:"Add Post Mortem Report"},
      {href:"",label:"Add Inquiry Details"},
      {href:"",label:"Change Inquiry Officer"},
    ]},
    {href:"",label:"Medico Legal Case (MLC)",children:[
      {href:"",label:"Registration of Medico Legal Case"},
      {href:"",label:"View Registered Medico Legal Case"},
      {href:"",label:"Add Medico Legal Case Report"},
      {href:"",label:"Change of Inquiry Officer (Medico Legal Case)"},
      {href:"",label:"Transfer of Medico Legal Case"},
      {href:"",label:"Re-registration transfer of medico-legal case"},
    ]},
    {href:"",label:"Missing Person",children:[
      {href:"",label:"Registration of Missing Cattle"},
      {href:"",label:"Search and View Missing Person Details"},
      {href:"",label:"Add missing person inquiry details"},
      {href:"",label:"Change Inquiry Officer (For Missing Person)"},
      {href:"",label:"Review of investigation report by SHO and action taken"},
    ]},
    {href:"",label:"Lost Property",children:[
      {href:"",label:"Registration of Lost Property"},
      {href:"",label:"Report of Inquiry on Lost Property"},
      {href:"",label:"Find and track lost property"},
     
    ]},
    {href:"",label:"Unidentified Dead Body/Unnatural Death Cattle",children:[
      {href:"",label:"Registration of Missing Cattle"},
      {href:"",label:"Search and view details of missing cattle"},
      {href:"",label:"Add Inquiry Details (Missing Cattle)"},
      {href:"",label:"Change Inquiry Officer"},
      {href:"",label:"Accepting / Rejecting Investigation Report"},
      {href:"",label:"Registration of Missing Cattle"},
      {href:"",label:"Search and view details of missing cattle"},
      {href:"",label:"Add Inquiry Details (Missing Cattle)"},
      {href:"",label:"Change Inquiry Officer"},
      {href:"",label:"Accepting / Rejecting Investigation Report"}
    ]},
    {href:"",label:"Foreign Registration"},
    {href:"",label:"Police Control Room"},
    {href:"",label:"C - Farm"},
    {href:"",label:"Preventive Action"},
    {href:"",label:"Unclaimed / Abandoned Property"},
    {href:"",label:"Stranger's Roll"},
    {href:"",label:"Fire Incident"},
    {href:"",label:"Unknown Person"},
    {href:"",label:"Upload Digital Signature"},
    {href:"",label:"Job Appraisal System (PMS)"},
    {href:"",label:"CLG Member Report"},
    {href:"",label:"Missing Article Report"},
    {href:"",label:"SP Office"},
  ]},
    {href:"",label:"Investigation" ,children:[
      {href:"",label:"Chain of Custody"},
    {href:"",label:" IIFII - IIFV"},
    {href:"",label:"Notices & Orders"},
    {href:"",label:"Case Diary"},
    {href:"",label:"Case Progress Report"},
    {href:"",label:"Asset Movement Challan/Receipt"},
    {href:"",label:"External Agencies"},
    {href:"",label:"Criminal Dossier"},
    {href:"",label:"Criminal Profile"},
    {href:"",label:"Proclaimed offender"},
    {href:"",label:"Bail Details"},
    {href:"",label:"Remand Form"},
    {href:"",label:"Inquiry Form"},
    {href:"",label:"Amendment of Section (Alteration Memo)"},
    {href:"",label:"Re-allocation of cases"},
    {href:"",label:"Malkhana"},
    {href:"",label:"File Room"},
    {href:"",label:"Preparation of Personal Search Memorandum"},
    {href:"",label:"Antecedents and Background Reports"},
    {href:"",label:"Update Fake Indian Currency Information"},
  ]}	,
    {href:"",label:"Prosecution",children:[
      {href:"",label:"E-court"},
    {href:"",label:"Warrant Summons"},
    {href:"",label:"Court Case Number"},
    {href:"",label:"Court Trial Details"},
    {href:"",label:"Court Case Disposal Form (IIF - VI)"},
    {href:"",label:"Result of Appeal Form (IIF - VII)"},
    {href:"",label:"Add Jail Detail"},
    {href:"",label:"Assigning case number from JJB"},
    {href:"",label:"Application to court for release from malkhana of property"}
    ]},
    {href:"",label:"MIS Dashboard"}	,
    {href:"",label:"Data Services",children:[
    {href:"",label:"E-General Village Information"},
    {href:"",label:"Village Crime Details"},
    {href:"",label:"Prisoner Details"},
    {href:"",label:"Writ Petition Description"},
    {href:"",label:"Arms License Details"},
    {href:"",label:"Add Firing / Lathi Charge details"},
    {href:"",label:"Senior Citizen Information"},
    {href:"",label:"View Senior Citizen Information"},
    {href:"",label:"Single Woman Information"},
    {href:"",label:"Single woman view information"},
    {href:"",label:"Drug Guppy Information"},
    {href:"",label:"View Drug Guppy Information"},
    {href:"",label:"Sex Offender Information"},
    {href:"",label:"View Sex Offender Information"},
    {href:"",label:"Assistant to Citizen Police Information"},
    {href:"",label:"See Helpful Citizen for Police Information"},
    {href:"",label:"Beet Description"},
    {href:"",label:"Court Registration"},
    
    ]}	,
    {href:"",label:"Register"},
    {href:"",label:"Search and Query",children:[
      {href:"",label:"Quick Find"},
      {href:"",label:"Quick Search"},
      {href:"",label:"Person & Matching Properties"},
      {href:"",label:"Monitoring Officer Karma Report"},
      {href:"",label:"View Unfinished Business"},
      {href:"",label:"View and Merge Criminal Records"},
      {href:"",label:"File a Criminal Record"},
      {href:"",label:"Check Out Social Justice"},      
      ]}	
      
      
    ]
  constructor(private httpClient: HttpClient) {}
  
      getMenu() {
        return this.menu;
        
      }
    

  
  
  
}
