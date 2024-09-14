import React from "react";
import { Card } from "react-bootstrap";
function CyberSecurity() {
  return (
    <div>
      <br />
      <h1 className="text-center">Cyber Security</h1>
      <br />
      <Card className=" me-5 ms-5 bs">
        <Card.Header className="text-center">
          <b>Cyber Security</b>
        </Card.Header>
        <Card.Body>
          Cybersecurity is the practice of protecting systems, networks, and
          data from digital attacks, theft, and damage. As technology advances
          and more data is stored and transmitted online, the importance of
          cybersecurity grows. Here are some key aspects of cybersecurity: ###
          **Core Concepts** 1. **Confidentiality, Integrity, and Availability
          (CIA Triad)**: - **Confidentiality**: Ensuring that information is
          only accessible to those authorized to view it. - **Integrity**:
          Ensuring that data remains accurate and unaltered during storage,
          transmission, and processing. - **Availability**: Ensuring that
          information and resources are available to authorized users when
          needed. 2. **Threats and Vulnerabilities**: - **Threats**: Potential
          causes of unwanted incidents that can harm systems or data (e.g.,
          hackers, malware). - **Vulnerabilities**: Weaknesses in a system that
          could be exploited by threats (e.g., software bugs, weak passwords).
          3. **Attacks**: - **Malware**: Malicious software like viruses, worms,
          and ransomware designed to harm or exploit systems. - **Phishing**:
          Fraudulent attempts to obtain sensitive information by pretending to
          be a trustworthy entity. - **Denial of Service (DoS)**: Attacks that
          aim to disrupt service availability by overwhelming a system with
          traffic. - **Man-in-the-Middle (MitM)**: Attacks where an adversary
          intercepts or alters communications between two parties. ###
          **Defensive Measures** 1. **Firewalls**: Systems that monitor and
          control incoming and outgoing network traffic based on predetermined
          security rules. 2. **Antivirus and Anti-malware Software**: Programs
          designed to detect and remove malicious software. 3. **Encryption**:
          Encoding data so that it can only be accessed by authorized parties,
          ensuring confidentiality and integrity. 4. **Access Controls**:
          Mechanisms to ensure that only authorized users can access certain
          resources, often implemented through user authentication and
          authorization systems. 5. **Intrusion Detection and Prevention Systems
          (IDPS)**: Tools that monitor network or system activities for
          malicious activities or policy violations and take action to prevent
          or respond to threats. 6. **Security Patches and Updates**: Regularly
          updating software and systems to fix vulnerabilities and improve
          security. 7. **Security Policies and Training**: Developing
          organizational policies for security practices and providing training
          to employees to recognize and respond to security threats. ###
          **Emerging Trends** 1. **Artificial Intelligence and Machine
          Learning**: These technologies are increasingly used to detect
          anomalies and respond to threats in real-time. 2. **Zero Trust
          Architecture**: A security model that assumes that threats could be
          internal or external and therefore requires verification for every
          access request. 3. **Cloud Security**: Protecting data, applications,
          and services hosted in cloud environments from cyber threats. 4.
          **Internet of Things (IoT) Security**: Securing the growing number of
          connected devices and systems in the IoT landscape. ### **Ethics and
          Compliance** 1. **Regulations and Standards**: Adhering to legal and
          regulatory requirements such as GDPR, CCPA, and industry-specific
          standards like PCI-DSS for payment card security. 2. **Ethical
          Considerations**: Balancing security measures with privacy concerns
          and ensuring responsible use of data and technology. Cybersecurity is
          a continually evolving field, requiring professionals to stay updated
          with the latest threats, technologies, and best practices to
          effectively protect digital assets and maintain the integrity of
          systems.
        </Card.Body>
      </Card>
    </div>
  );
}

export default CyberSecurity;