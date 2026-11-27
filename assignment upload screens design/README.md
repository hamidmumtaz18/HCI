

## Figma Prototype
Open the file: https://www.figma.com/design/9rrvXihOUCGX6mZpWLp12Q
(Click the **▶ Present** button to run the clickable prototype.)

A plain-HTML clickable copy of the same flow is in [`prototype/index.html`](prototype/index.html)
(can be hosted with GitHub Pages).

## Problem
Students sometimes struggle to identify submission deadlines and to confirm whether their files were uploaded successfully.

## Task coverage
| Requirement | How it is met |
|---|---|
| View an assignment and its deadline | Screen 1 (list with deadlines + status tags) and Screen 2 (details with deadline box) |
| Open assignment details and upload a file | Screen 2 → Screen 3 (file picker, selected file, progress) |
| Clear submission confirmation | Screen 4 (check icon, file name, timestamp, receipt ID, status) |
| At least 3 connected screens | 4 screens connected with prototype links |
| No login/register screens | None included |
| Interactive main navigation buttons | Open, Back, Upload File, Submit Assignment, Cancel, Back to Assignments, View Assignment |
| Two brief annotations | See below (also placed on the Figma canvas) |

## Screens and flow
1. **Assignments List** – cards with title, course, due date/time, status tag → *Open*
2. **Assignment Details** – deadline box, description, requirements, submission status → *Upload File*
3. **Upload File** – drop zone, selected file, progress bar → *Submit Assignment*
4. **Submission Confirmation** – success icon, receipt details → *Back to Assignments / View Assignment*

## Design decision annotations
1. **Screen 1:** Each card shows the deadline and a status tag (text and style, not only colour) so students instantly see what is due and what is already submitted.
2. **Screen 4:** A dedicated confirmation screen with a check icon, file name, timestamp and receipt ID gives clear feedback that the upload succeeded (visibility of system status).

## Assumptions
- Student is already signed in (no login/register screens, as required).
- Mobile-first layout, 390 × 844 px.
- Sample data only; allowed files are PDF, DOCX, ZIP up to 10 MB.
- Back, Open, Upload and Submit buttons act as the main navigation.

## Folder structure
```
hci-midterm-q1/
├── README.md
├── prototype/index.html     # clickable HTML version of the prototype
└── screenshots/             # add your exported Figma PNGs here
```

## Screenshots
Export each frame from Figma (select frame → Export → PNG) and save them in `screenshots/` as
`1-assignments-list.png`, `2-assignment-details.png`, `3-upload-file.png`, `4-confirmation.png`.
