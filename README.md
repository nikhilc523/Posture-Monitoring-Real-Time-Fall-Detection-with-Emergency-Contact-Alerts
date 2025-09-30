# Mobile Posture Monitoring & Fall Detection - CS663 Project

A comprehensive GitHub Pages website showcasing a computer vision project for mobile posture monitoring and real-time fall detection using on-device pose estimation.

## Project Overview

This project presents a mobile application that leverages advanced computer vision techniques to:
- Monitor user posture in real-time using smartphone cameras
- Detect falls and emergency situations
- Provide automated emergency contact alerts with GPS location
- Maintain user privacy through on-device processing

## Website Structure

The website is organized into multiple sections:

- **Home** (`index.html`) - Project introduction and overview
- **Sensors** (`sensors.html`) - Hardware and platform architecture
- **Models** (`models.html`) - Pose estimation models (MoveNet, MediaPipe BlazePose)
- **Posture** (`posture.html`) - Posture monitoring and slouching detection
- **Fall Logic** (`falllogic.html`) - Fall detection algorithms with interactive quiz
- **Emergency** (`emergency.html`) - Emergency response workflow
- **Case Studies** (`casestudies.html`) - Prior work and research analysis
- **Limitations** (`limitations.html`) - System limitations and mitigations
- **Future** (`future.html`) - Future directions and conclusions
- **Bibliography** (`bibliography.html`) - Annotated bibliography

## Features

- **Responsive Design**: Clean, modern layout that works on all devices
- **Interactive Elements**: JavaScript-powered quiz for fall detection understanding
- **Audio Integration**: Placeholder audio narration for each section
- **Consistent Navigation**: Top navigation bar with active page highlighting
- **Privacy-First**: Emphasis on on-device processing and user privacy

## Technical Implementation

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern styling with flexbox/grid layouts and responsive design
- **JavaScript**: Interactive quiz functionality and enhanced user experience
- **GitHub Pages**: Static site hosting with fast loading times

## File Structure

```
├── index.html              # Home page
├── sensors.html            # Sensors & platform
├── models.html             # Pose estimation models
├── posture.html            # Posture detection
├── falllogic.html          # Fall detection with quiz
├── emergency.html          # Emergency workflow
├── casestudies.html        # Case studies & prior work
├── limitations.html        # Limitations & mitigations
├── future.html             # Future directions
├── bibliography.html       # Annotated bibliography
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Placeholder images
├── audio/                  # Audio narration files
└── README.md               # This file
```

## Setup Instructions

1. Clone or download this repository
2. Add your images to the `images/` folder (see Image Requirements below)
3. Add your audio files to the `audio/` folder (see Audio Requirements below)
4. Update the author name in all HTML files if needed
5. Deploy to GitHub Pages or any static hosting service

## Image Requirements

The following placeholder images are referenced in the website:

### General Images
- `pose-diagram.png` - Pose estimation keypoints diagram
- `camera-setup.png` - Smartphone camera setup
- `imu-sensors.png` - IMU sensor data visualization

### Model-Specific Images
- `movenet-keypoints.png` - MoveNet 17 keypoint schema
- `blazepose-landmarks.png` - MediaPipe BlazePose 33 landmarks

### Algorithm Images
- `posture-analysis.png` - Good vs poor posture comparison
- `neck-shoulder-hip.png` - Angle measurement diagram
- `fall-detection-flow.png` - Fall detection flowchart
- `vertical-drop.png` - Vertical displacement patterns

### Quiz Images (for interactive quiz)
- `fall-scenario-1.png` - Fall vs sit scenario 1
- `fall-scenario-2.png` - Fall vs sit scenario 2
- `fall-scenario-3.png` - Fall vs sit scenario 3
- `fall-scenario-4.png` - Fall vs sit scenario 4

### System Images
- `emergency-workflow.png` - Emergency response workflow
- `privacy-protection.png` - Privacy protection measures
- `research-timeline.png` - Research evolution timeline

## Audio Requirements

The following audio files should be added to the `audio/` folder:

- `introduction.mp3` - Project introduction (index.html)
- `sensors-technical.mp3` - Technical sensor details (sensors.html)
- `models-architecture.mp3` - Model architecture explanation (models.html)
- `posture-science.mp3` - Posture science explanation (posture.html)
- `fall-algorithm.mp3` - Fall detection algorithm details (falllogic.html)
- `emergency-protocol.mp3` - Emergency response protocol (emergency.html)
- `research-review.mp3` - Research review discussion (casestudies.html)
- `technical-challenges.mp3` - Technical challenges discussion (limitations.html)
- `future-vision.mp3` - Future vision discussion (future.html)
- `research-methodology.mp3` - Research methodology (bibliography.html)

## Customization

### Updating Author Information
Replace "Nikhil Chowdary" with your name in:
- All HTML page headers
- Footer sections
- Hero section in index.html

### Modifying Content
Each HTML file contains detailed, technical content that can be customized:
- Update technical specifications
- Modify algorithm descriptions
- Add your own research findings
- Update bibliography with your sources

### Styling Changes
Modify `style.css` to customize:
- Color scheme (currently blue/gray theme)
- Typography (currently using system fonts)
- Layout and spacing
- Responsive breakpoints

## Browser Compatibility

The website is designed to work on:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (responsive design)
- Screen readers (semantic HTML)

## License

This project is created for educational purposes as part of CS663 Computer Vision coursework.

## Author

**Nikhil Chowdary**  
CS663 - Computer Vision Project  
2024
