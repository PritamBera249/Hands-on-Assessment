def calculate(marks):
    total = sum(marks)
    return total, total / len(marks)

name = input("Enter student name: ")
marks = [float(input(f"Enter marks for subject {i}: ")) for i in range(1, 4)]

total, average = calculate(marks)
result = "Pass" if average >= 40 else "Fail"

print("Name:", name)
print("Total:", total)
print("Average:", round(average, 2))
print("Result:", result)