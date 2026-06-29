### Security Audit Research

For this week's compliance and security review, I performed an npm dependency audit on Three Little Ladies Bakery project.

The audit found seven vulnerabilities ranging freom Moderate to Critical severity. Several issues were related to development dependencies including ajv, brace-expansion, js-yaml, minimatch, and flatter. A critical vulnerability was also identified through the shell-quote package, which is used indirectly by concurrently.

Although these vulnerabilities currently affect develpoment dependencies rather than customer-facing functionality. they highlight the importance of regular dependency maintenance and automated security monitoring.

To improve security, I plan to use `npm audit` regularly, enable GitHub Dependabot alerts, research GitHub CodeQL scanning and keep project dependencies updated. These practices will help reduce security risks and support long-term project maintenance.

## Dependency Audit Research

As part of the security audit, I reviewed project dependencies using `npm outdated`. Several packages were found to have newer versions available, including @eslint/js, eslint, concurrently and globals.

The review showed that some updates are minor patches that can be applied with minimal risk, while other are major version upgrades that may require more testing and configuration updates. This highlights the importanct of maintaining dependencies thorughout the software development lifecycle.

Future plans include reviewing dependency updates regularly, testing major version upgrades in feature branches and enabling automated dependency monitoring through GitHub Dependabot.
