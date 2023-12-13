import { api } from "./api";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
};

export const employessApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: "/employees",
        method: "GET",
      }),
    }),
    getEmployee: builder.query<Employee, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "GET",
      }),
    }),
    editEmployee: builder.mutation<string, Employee>({
      query: (employee) => ({
        url: `/employees/edit/${employee.id}`,
        method: "PATCH",
      }),
    }),
    removeEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `/employees/remove/${id}`,
        method: "DELETE",
        body: { id },
      }),
    }),
    addEmployee: builder.mutation<Employee, Employee>({
      query: (employee) => ({
        url: `/employees/add`,
        method: "POST",
        body: { ...employee },
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useEditEmployeeMutation,
  useRemoveEmployeeMutation,
  useAddEmployeeMutation,
} = employessApi;

export const {
  endpoints: {
    getAllEmployees,
    getEmployee,
    removeEmployee,
    addEmployee,
    editEmployee,
  },
} = employessApi;
