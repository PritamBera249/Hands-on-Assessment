students = {"Rahul": 45, "Pritam": 72, "Subhajit": 58, "Sohel": 90, "Akash": 35}

print("All Students:")
for name, marks in students.items():
    print(name, "-", marks)

print("\nScored 50 or above:")
for name, marks in students.items():
    if marks >= 50:
        print(name)

highest = max(students.values())
print("\nHighest mark:", highest)