import type { CustomerFormData } from "~/types/customer";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const token = localStorage.getItem("access_token");

export const customerService = {
  async getCustomers() {
    const response = await fetch(`${API_URL}/customers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  async getCustomer(id: string) {
    const response = await fetch(`${API_URL}/customers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  async createCustomer(customer: CustomerFormData) {
    const response = await fetch(`${API_URL}/customers`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  async updateCustomer(id: string, customer: CustomerFormData) {
    const response = await fetch(`${API_URL}/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  async deleteCustomer(id: string) {
    const response = await fetch(`${API_URL}/customers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },
};
