var userRole = "admin";
var accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("access level:" , accessLevel);

function getAccess(role) {
    switch (role) {
        case "Employee":
            return "Access granted: Full access to Dietary Services.";
        case "Enrolled Member":
            return "Access granted: Full access to Dietary Services and one-on-one interaction with a dietician.";
        case "Subscriber":
            return "Access granted: Partial access to Dietary Services.";
        case "Non-Subscriber":
            return "Access denied: Please enroll or subscribe to avail this facility.";
        default:
            return "Invalid role: Please enter a valid role (Employee, Enrolled Member, Subscriber, Non-Subscriber).";
    }
}

// Test cases
console.log(getAccess("Employee"));         // Full access to Dietary Services
console.log(getAccess("Enrolled Member"));  // Full access + dietician interaction
console.log(getAccess("Subscriber"));       // Partial access
console.log(getAccess("Non-Subscriber"));   // Access denied
console.log(getAccess("Visitor"));          // Invalid role